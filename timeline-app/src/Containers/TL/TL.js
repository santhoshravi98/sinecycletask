import React, { Component } from 'react'
import Radio from '../Radio/Radio'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import '../TL/TL.css'
import TimeLine from '../TimeLine/TimeLine'
import TimeLineItem from '../TimeLineITem/TimeLineItem'
import * as DisplayModeActionCreator from '../../Store/Actions/DisplayModeActionCreator'
import { connect } from 'react-redux'
import { SketchPicker } from 'react-color';

/* 

Parent Core Component Responsible for Event Handlers
Redux is used for Global Store
Values maintained in Redux include : User Selected Color, User Selected Mode
Sketch Picker Library is used for the purpose of color selection
Unit Tests are written using React Testing Libary and Jest
Css Modules are used in Radio Component for Local Scoping of CSS Classes
TL component is connected to access both the Global store state and dispatch functions

*/

class TL extends Component {

    // Radio Change Handler Helper Method
    onRadioChangeHandler = (event, id) => {
        let postData = {
            mode: event.target.value
        }
        this.props.postMode(postData);
    }

    // Color Change Handler Helper Method
    handleChangeComplete = (color) => {
        let postData = {
            selectedColor: color.hex
        }
        this.props.postColor(postData);
    };

    render() {
        return (
            <Auxillary>
                <div className='main'>
                    <h1 className='heading'>Custom TimeLine</h1>
                    <Radio radioChange={this.onRadioChangeHandler} checked={this.props.mode} />
                    <span className="dropdownHeading"><h2>Change the Color of the Timeline Nodes :</h2></span>
                    <SketchPicker
                        className="sketch"
                        color="white"
                        onChangeComplete={this.handleChangeComplete}
                    />
                    <br />
                    <br />
                    <section className="code-box">
                        <section className="code-box-demo">

                            <TimeLine data-testid="timeline">
                                <TimeLineItem label="2015-09-01">
                                    Sample Text 1
                        </TimeLineItem>
                                <TimeLineItem label="2015-09-22">
                                Sample Text 2
                        </TimeLineItem>
                                <TimeLineItem label="2015-05-13">
                                Sample Text 3
                        </TimeLineItem>
                                <TimeLineItem label="2015-09-17">
                                Sample Text 4
                        </TimeLineItem>
                                <TimeLineItem label="2015-09-18">
                                Sample Text 5
                        </TimeLineItem>
                            </TimeLine>
                        </section>
                    </section>
                </div>
            </Auxillary>
        )
    }
}

// States from Redux Store
const mapStateToProps = (state) => {
    return {
        userSelectedMode: state.DisplayModeReducer.userSelectedMode
    }
}

// Dispatched Actions from Action Creators
const mapDispatchToProps = (dispatch) => {
    return {
        postMode: (data) => {
            dispatch(DisplayModeActionCreator.postMode(data));
        },
        postColor: (data) => {
            dispatch(DisplayModeActionCreator.postColor(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TL);