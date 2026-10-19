import request from "../utils/request";

function authHeader(accessToken) {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
}

export function getAll() {
  return request("items?order=created_at.desc");
}

export function getLatest() {
  return request("items?order=created_at.desc&limit=3");
}

export function getOne(itemId) {
  return request(`items?id=eq.${itemId}&select=*,profiles(username)`);
}

export function getByOwner(userId) {
  return request(`items?ownerId=eq.${userId}&order=created_at.desc`);
}

export function create(data, accessToken) {
  return request("items", "POST", data, authHeader(accessToken));
}

export function update(itemId, data, accessToken) {
  return request(`items?id=eq.${itemId}`, "PATCH", data, authHeader(accessToken));
}

export function remove(itemId, accessToken) {
  return request(`items?id=eq.${itemId}`, "DELETE", null, authHeader(accessToken));
}