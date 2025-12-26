export async function apiFetch<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET"
) {
  const res = await fetch("/api" + url, {
    method,
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json() as Promise<T>;
}
