import { useEffect, useState } from "react";
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { makeUrl } from 'Utils/helper';

export const useFetch = (hasInitData, initData, url, hasApiKey) => {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ hasError: false, code: '', message: ''});
    const [data, setData] = useState(initData);
    const [hasData, setHasData] = useState(hasInitData);
  
    useEffect(() => {

        const searchAPI = query => {         
            return fetch(makeUrl(url, query, hasApiKey));
        };
         
        const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

        const handleFetchError = result => {
            const code = result.code || null;
            setError({ hasError: true, code, message: result.message });
        }

        const handleData = data => {
            setIsLoading(false);      
            data.status === 'error' ? handleFetchError(data) : setData(data);
        }

        const fetchData = async () => {
            setIsLoading(true);
            try{           
                const response = await searchAPIDebounced(search);
                const data = await response.json();
                handleData(data);
            } 
            catch (error) {
                setIsLoading(false);
                handleFetchError(error);
            }            
        };
        if(!hasData) {
            fetchData();
        }
    }, [search, hasData, url, hasApiKey]);
  
    return { isLoading, error, query, setQuery, setSearch, hasData, setHasData, data };
};