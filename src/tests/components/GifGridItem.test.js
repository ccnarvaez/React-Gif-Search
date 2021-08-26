
import { shallow } from "enzyme";
import React from "react";
import { GifGridItem } from "../../components/GifGridItem";




describe( ' Testing <GifGridItem /> component ', () => {

    // General variables
    const title = 'sailor moon GIF';
    const url = 'https://giphy.com/gifs/sailor-moon-r-26gBjmGEsrFQlj8g8';
    const wrapper = shallow(

        <GifGridItem title = { title } url = { url } />
    )

    test( ' Should render properly' , () => {
 
        expect ( wrapper ).toMatchSnapshot()

    });

    test( ' Should print a paragraph containing title text ', () => {

        const findParagraph = wrapper.find('p').text().trim();

        expect ( findParagraph ).toBe( title );


    });

    test( 'Should content img src and alt props', () => {

        // const img = wrapper.find('#test').html(); 
        // console.log ( <img id="test" src="https://giphy.com/gifs/sailor-moon-r-26gBjmGEsrFQlj8g8" alt="sailor moon GIF"/> )

        const img = wrapper.find('#test').props();
        expect( img.src ). toBe( url );
        expect( img.alt ). toBe( title );
    });

    test( 'div className should contain animate__bounce', () => {
        const div = wrapper.find( 'div' ).props();
        const classTxt = 'card animate__animated animate__bounce'
        expect( div.className ). toBe( classTxt );
        expect( div.className.includes('animate__bounce') ). toBe( true );
    })
})