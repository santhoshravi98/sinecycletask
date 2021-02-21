import React, { Component } from 'react'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import { connect } from 'react-redux'

// Core Child Component for the rendering of individual rows in Timeline
// Redux Store is connected to fetch the user selected Color and user selected Mode
class TimeLineItem extends Component {
    render() {
        let mode = this.props.userSelectedMode;
        return (
            <Auxillary>
                <li className={"list-timeline-item list-timeline-item-" + mode}>
                    <div className="list-timeline-item-label">{this.props.label}</div>
                    <div className="list-timeline-item-tail"></div>
                    <div className="list-timeline-item-head list-timeline-item-head-blue" style={{ borderColor: this.props.selectedColor }}></div>
                    <div className="list-timeline-item-content">{this.props.children}</div>
                </li>
            </Auxillary>
        )
    }
}

// To fetch the Store State as props
const mapStateToProps = (state) => {
    return {
        userSelectedMode: state.DisplayModeReducer.userSelectedMode,
        selectedColor: state.DisplayModeReducer.selectedColor
    }
}

// Connect the compone to the Global Store
export default connect(mapStateToProps)(TimeLineItem);