import { useEffect } from "react";

const useLocalStorage = (key, data) => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);

    const load = () => {
        try {
            const stored = localStorage.getItem(key);
            return JSON.parse(stored);
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    return {
        load,
    }
}

export { useLocalStorage }