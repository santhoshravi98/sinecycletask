import React from 'react'
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react'
import Note from '../Note'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import {fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)
it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<div></div>,div); 
})

it("renders Note Container correctly",()=>{
    const {queryByTestId} = render(<Note></Note>)
    expect(queryByTestId("note_test")).toBeTruthy();
})

it("matches snapshot",() => {
const tree = renderer.create(<Note></Note>).toJSON();
expect(tree).toMatchSnapshot();
})

// it("has correct class",() => {
//     const  = render(<TimeLine></TimeLine>)
//     expect(getByTestId("ul-list").
//     })
