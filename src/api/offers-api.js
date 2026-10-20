import request from "../utils/request";

function authHeader(accessToken) {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
}

export function getByItem(itemId) {
  return request(
    `offers?itemId=eq.${itemId}&select=*,profiles(username)&order=created_at.asc`
  );
}

export function create(itemId, text, accessToken) {
  return request(
    "offers",
    "POST",
    { itemId: Number(itemId), text },
    authHeader(accessToken)
  );
}

export function remove(offerId, accessToken) {
  return request(`offers?id=eq.${offerId}`, "DELETE", null, authHeader(accessToken));
}