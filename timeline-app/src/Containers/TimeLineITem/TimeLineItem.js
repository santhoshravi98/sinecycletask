import React, { Component } from 'react'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import '../TimeLine/TimeLine.css'
import { connect } from 'react-redux'

class TimeLineItem extends Component {
    render() {
        let mode = this.props.userSelectedMode;
        if (mode === "reverse")
            mode = '';
        return (
            <Auxillary>
                <li className={"list-timeline-item list-timeline-item-" + mode} id={mode}>
                    <div className="list-timeline-item-label">{this.props.label}</div>
                    <div className="list-timeline-item-tail"></div>
                    <div className="list-timeline-item-head list-timeline-item-head-blue" style={{borderColor: this.props.selectedColor}}></div>
                    <div className="list-timeline-item-content">{this.props.children}</div>
                </li>
            </Auxillary>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userSelectedMode: state.DisplayModeReducer.userSelectedMode,
        selectedColor : state.DisplayModeReducer.selectedColor
    }
}



export default connect(mapStateToProps)(TimeLineItem);