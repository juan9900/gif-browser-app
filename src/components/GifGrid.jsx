// import { useEffect, useState } from "react"
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const {gifList, isLoading} = useFetchGifs(category);
    

    return (
        
        <div>
            {isLoading ? <h2>Cargando...</h2> : (
                <>
            <h2>{category}</h2>
            
            <ul className="gif-topic-container">
            {gifList.length > 0 ?
                // <p>{gifList[0].url}</p>
                // <img src={gifList[0].url} alt="" srcset="" />
                gifList.map(gif =>  (
                        <GifItem key={gif.id} 
                        // title={gif.title} url={gif.url}
                        { ...gif } //<-- Esto es mejor
                        />
                    )
                )
                : <p>No se encontaron resultados.</p>
            }
            </ul>
            </>
            )}
        </div>
    )
}
