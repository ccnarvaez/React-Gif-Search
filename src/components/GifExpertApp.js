import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';



 export const GifExpertApp = () => {

   
   let [ categories, setCategories] = useState( [ 'Sailor Moon'] );
 
  

    return(
        <div>
            <h1> Buscador de gifs! </h1>
            <AddCategory setCategories = { setCategories }  />
            <hr />
    
            <ol>
                { categories.map(  category => {
                    return(
                        <GifGrid 
                            category = { category } 
                            key = { category }
                        />
                    )
                })}
            </ol>
        </div>
    )
}