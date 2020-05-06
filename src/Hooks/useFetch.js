import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: false, error: false })

    useEffect(() => {
        setState({ data: null, loading: true , error: false})

        fetch(url)
            .then(response => response.json())
            .then(data => setState({ data: data, loading: false, error: false }))
            .catch(setState({ data: null, loading: false, error: true }))
    }, [url])

    return state
}