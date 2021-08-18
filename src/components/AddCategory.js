import React,  { useState } from "react";
import propTypes from 'prop-types';



export const  AddCategory = ( { setCategories } ) => {

    const [ inputValue, setInputValue ] = useState('hello world!');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length >= 1){
            setCategories(cats => [inputValue,...cats ])
            setInputValue ('');
        }
        
    }
    return(
        < form onSubmit = { handleSubmit}>
            
            <input 
                type= "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}