import { authRequest } from "../utils/request";

export function register({ username, email, password }) {
  return authRequest("signup", "POST", {
    email,
    password,
    data: { username },
  });
}

export function login({ email, password }) {
  return authRequest("token?grant_type=password", "POST", { email, password });
}

export function logout(accessToken) {
  return authRequest("logout?scope=local", "POST", null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}