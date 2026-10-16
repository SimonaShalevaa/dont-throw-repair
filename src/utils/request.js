const url = "https://isllnjprscvgsgturznq.supabase.co/rest/v1/";

export default async function request(path = "", method = "GET", data = null, opts = {}) {
  const options = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
    ...opts,
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
    const error = await response.json();
    throw new Error(error.message);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}