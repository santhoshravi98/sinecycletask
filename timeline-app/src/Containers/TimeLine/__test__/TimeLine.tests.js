// import React from 'react'
// import ReactDOM from 'react-dom'
// import {render} from '@testing-library/react'
// import TimeLine from '../TimeLine'
// import '@testing-library/jest-dom'
// import renderer from 'react-test-renderer'
// import {fireEvent, cleanup} from '@testing-library/react';
// import TL from '../../TL/TL'

// afterEach(cleanup)
// it("renders without crashing",()=>{
//     const div = document.createElement("div");
//     ReactDOM.render(<ul></ul>,div); 
// })

// it("renders unordered list correctly",()=>{
//     const {queryByTestId} = render(<TimeLine></TimeLine>)
//     expect(queryByTestId("ul-list")).toBeTruthy();
// })

// it("matches snapshot",() => {
// const tree = renderer.create(<TimeLine></TimeLine>).toJSON();
// expect(tree).toMatchSnapshot();
// })
