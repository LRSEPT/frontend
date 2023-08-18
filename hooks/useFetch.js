import { useEffect, useState } from 'react'

export default function useFetch (url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url, {signal: controller.signal});
                const json = await response.json();

                setData(json)
                setLoading(false)
            } catch (error) {
                setError("" + error)
                setLoading(false)
            }
        }

        fetchData();
        return () => {
            controller.abort()
        }
    },[url])

    return [ loading, error, data ];
}

