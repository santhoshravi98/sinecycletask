import React, { Component } from 'react'
import Radio from '../Radio/Radio'
import Auxillary from '../../HOC/Auxillary/Auxillary'
// import css from '../TL/TL.module.css'
import '../TL/TL.css'
import TimeLine from '../TimeLine/TimeLine'
import TimeLineItem from '../TimeLineITem/TimeLineItem'
import * as DisplayModeActionCreator from '../../Store/Actions/DisplayModeActionCreator'
import { connect } from 'react-redux'
import { SketchPicker } from 'react-color';

class TL extends Component {

    onRadioChangeHandler = (event, id) => {
        let postData = {
            mode: event.target.value
        }
        this.props.postMode(postData);
    }

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
                    <section className="code-box">
                        <section className="code-box-demo">
                            <Radio radioChange={this.onRadioChangeHandler} checked={this.props.mode} />
                            <SketchPicker
                                color="white"
                                onChangeComplete={this.handleChangeComplete}
                            />
                            <TimeLine data-testid="timeline">
                                <TimeLineItem label="2015-09-01">
                                    site 2015-09-01
                        </TimeLineItem>
                                <TimeLineItem label="2015s-0922">
                                    santhosh site
                        </TimeLineItem>
                                <TimeLineItem label="2015-0s9-033">
                                    sree site
                        </TimeLineItem>
                                <TimeLineItem label="2015-0s9-44">
                                    free site
                        </TimeLineItem>
                                <TimeLineItem label="2015-09-55">
                                    tree site
                        </TimeLineItem>
                            </TimeLine>
                        </section>
                    </section>
                </div>
            </Auxillary>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userSelectedMode: state.DisplayModeReducer.userSelectedMode
    }
}

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