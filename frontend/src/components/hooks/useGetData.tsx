import { useEffect, useState } from 'react';

const useGetData = (getMethod: Function) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await getMethod();
                console.log("Inside useGetData", res);
                setResponse(res);
            } catch(error: any){
                setError(error);
                console.log(error);
                console.log("something happened...");
            }
            setIsLoading(false);
        };
        getData();

    }, []);

    return { response, error, isLoading };
}

export default useGetData;