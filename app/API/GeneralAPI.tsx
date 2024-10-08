type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestParams {
    [key: string]: any;
}

export interface ApiResponse {
    success: boolean;
    message: string;
    listElementsDex: { id: string; name: string }[];
}

export async function apiRequest<T>(
    url: string,
    method: RequestMethod,
    params: RequestParams = {},
    headers: RequestParams = { "Content-Type": "application/json" },
    additionalHeaders: RequestParams = {}
): Promise<T> {
    try {
        const combinedHeaders = {
            ...headers,
            ...additionalHeaders,
        };

        const options: RequestInit = {
            method,
            headers: combinedHeaders,
        };

        if (method === "POST" || method === "PUT" || method === "PATCH") {
            options.body = JSON.stringify(params);
        }

        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json: T = await response.json();
        return json;
    } catch (error) {
        console.error("API Request Error:", error);
        throw error;
    }
}
