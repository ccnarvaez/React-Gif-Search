import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ( { category }) => {

    const { data, loading } = useFetchGifs( category );
    
    return(
    <>
        <h1> { category } </h1>

        { loading && <div className = "card animate__animated animate__rubberBand"> Cargando...</div>}
        <div className = " card-grid">
          
                {data.map( (img ) => (
                        
                        <GifGridItem key = { img.id } title = { img.title } url = { img.url } />
                    )
                )}   
         
        </div>
    </>
    )
}