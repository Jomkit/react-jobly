// check localStorage and update state

import { useEffect, useState } from "react"

const useLocalStorage = (key: string, startValue:(string | null) = null): [(string | null), Function] => {
    const initialValue = localStorage.getItem(key) || startValue;
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        if(item === null) {
            localStorage.removeItem(key);
        }else {
            localStorage.setItem(key, item);
        }
    }, [item]);
    
    //return getter and setter
    return [item, setItem];
}

export default useLocalStorage;