import {ENV} from "@/constants/env";

export async function fetcher(
    path: string,
    options?: RequestInit
) {
    const res = await fetch(`${ENV.API_URL}/api${path}`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });

    if (!res.ok) {
        throw await res.json();
    }

    return res.json();
}
