import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';
export const useFetchGifs = (category) => {

    const [gifList, setGifList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchGifApi(){
        setGifList(await getGifs(category));
        setIsLoading(false);
    }

    useEffect(() => {
        fetchGifApi();
    },[])
    
  return {
    gifList,
    isLoading
  }
}
