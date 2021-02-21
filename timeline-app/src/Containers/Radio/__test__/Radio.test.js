import React from 'react'
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react'
import Radio from '../Radio'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import {fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)
it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<div></div>,div); 
})

it("renders Radio Buttons correctly",()=>{
    const {queryByTestId} = render(<Radio></Radio>)
    expect(queryByTestId("radio_test")).toBeTruthy();
})

it("matches snapshot",() => {
const tree = renderer.create(<Radio></Radio>).toJSON();
expect(tree).toMatchSnapshot();
})

// it("has correct class",() => {
//     const  = render(<TimeLine></TimeLine>)
//     expect(getByTestId("ul-list").
//     })
