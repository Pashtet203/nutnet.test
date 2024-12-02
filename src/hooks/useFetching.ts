import {useState} from "react";

export const useFetching = (callback: (...params:any[]) =>void):[(...args:any[])=> void,boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetching(...args:any[]) {
        setIsLoading(true)
        try {
            await callback(...args)
        } catch (e:any) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}
