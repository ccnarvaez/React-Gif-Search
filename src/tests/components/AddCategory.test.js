import { shallow } from "enzyme";
import React from "react";
import { AddCategory } from "../../components/AddCategory";


describe( ' Testing over <AddCategory /> component', () => {

    const setCategories = () => {};
    const wrapper = shallow(

        <AddCategory setCategories= { setCategories } />
    );

    test( ' Should render properly', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test(' Default text is hello world!', () => {
        const input = wrapper.find('input').props();
        expect( input.value).toBe( 'hello world!');

    });
})