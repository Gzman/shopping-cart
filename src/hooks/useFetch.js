import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error(resp.status, resp.statusText);
                }
                return resp.json();
            })
            .then((json) => {
                const fetched = JSON.parse(json);
                setData(fetched);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return {
        data,
        error,
        isLoading,
    }
}

export { useFetch }