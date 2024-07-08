import { useEffect, useState } from 'react';

const useGetData = (url: string, getMethod: Function) => {
    const [response, setResponse] = useState(null);
    const getData = async () => {
        const res = await getMethod();
        console.log("Inside useGetData", res);
    }
}