const BASE = "/api";

async function handle(res) {
  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json() : null;
  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`);
  }
  return data;
}

export function apiGet(path, { includeUnpublished = false } = {}) {
  const url = includeUnpublished
    ? `${BASE}${path}${path.includes("?") ? "&" : "?"}all=1`
    : `${BASE}${path}`;
  return fetch(url, { credentials: "include" }).then(handle);
}

export function apiJson(path, method, body) {
  return fetch(`${BASE}${path}`, {
    method,
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then(handle);
}

export function apiForm(path, method, formData) {
  return fetch(`${BASE}${path}`, {
    method,
    credentials: "include",
    body: formData,
  }).then(handle);
}

export function apiDelete(path) {
  return fetch(`${BASE}${path}`, { method: "DELETE", credentials: "include" }).then(handle);
}
