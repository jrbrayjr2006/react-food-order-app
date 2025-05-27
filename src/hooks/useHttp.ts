import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest({url, config}: {url: string, config: {method: string, body?: string, headers?: HeadersInit}}) {
    // This function is a placeholder for sending HTTP requests.
    const response = await fetch(url, config);
    const responseData = await response.json();
    if (!response.ok) {
        throw new Error(responseData || 'Request failed!');
    }
    return responseData;
}

export default function useHttp({url, config, initialData}: {url: string, config: {method: string, body?: string, headers?: HeadersInit}, initialData?: object | null}) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState(initialData || null);
    const [error, setError] = useState<string | null>();

    const sendRequest = useCallback(async function sendRequst(
        url: string,
        config: {method: string, body?: string, headers?: HeadersInit},
    ) {
        setIsLoading(true);
        setError(null);
        try{
            const responseData = await sendHttpRequest({url, config})
                .then((responseData) => {
                    setData(responseData);
                })
                .catch((error) => {
                    setError(error.message || 'Something went wrong!');
                    console.error('Error:', error);
                });
            setIsLoading(false);
            return responseData;
        } catch (error) {
            console.error('Error:', error);
        }
    }, []);

    useEffect(() => {
        if (config && config.method === 'GET') {
            sendRequest(url, config);
        }
    }, [url, sendRequest, config]);

    return {
        isLoading,
        data,
        error,
        sendRequest,
    }
}