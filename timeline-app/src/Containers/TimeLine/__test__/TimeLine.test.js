import React from 'react'
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react'
import TimeLine from '../TimeLine'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import {fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)
it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<ul></ul>,div); 
})

// it("renders unordered list correctly",()=>{
//     const {getByTestId} = render(<TimeLine></TimeLine>)
//     expect(getByTestId("ul-list")).containsMatchingElement(<TimeLineItem />).toEqual(true)
// })

it("matches snapshot",() => {
const tree = renderer.create(<TimeLine></TimeLine>).toJSON();
expect(tree).toMatchSnapshot();
})

// it("has correct class",() => {
//     const  = render(<TimeLine></TimeLine>)
//     expect(getByTestId("ul-list").
//     })
