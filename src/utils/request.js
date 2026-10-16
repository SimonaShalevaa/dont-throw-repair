const baseUrl = "https://isllnjprscvgsgturznq.supabase.co";
const restUrl = `${baseUrl}/rest/v1/`;
const authUrl = `${baseUrl}/auth/v1/`;

async function baseRequest(
  url,
  path = "",
  method = "GET",
  data = null,
  opts = {},
) {
  const options = {
    ...opts,
    headers: {
      ...opts.headers,
      apikey: import.meta.env.VITE_API_KEY,
      Prefer: "return=representation",
    },
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${url}${path}`, options);

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));

    throw new Error(
      error.message ||
        error.msg ||
        error.error_description ||
        `HTTP error! status: ${response.status}`,
    );
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export default function request(path, method, data, opts) {
  return baseRequest(restUrl, path, method, data, opts);
}

export function authRequest(path, method, data, opts) {
  return baseRequest(authUrl, path, method, data, opts);
}
