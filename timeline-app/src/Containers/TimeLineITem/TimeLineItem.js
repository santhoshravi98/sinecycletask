import React, { Component } from 'react'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import { connect } from 'react-redux'
import { SpinnerCircular } from 'spinners-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

// Core Child Component for the rendering of individual rows in Timeline
// Redux Store is connected to fetch the user selected Color and user selected Mode
class TimeLineItem extends Component {
    render() {
        let mode = this.props.userSelectedMode;
        let dynamicNodeDiv = '';
        let content = '';
        let nodeColor = '';

        // To use the color if provided from the props, else choosing from the color picker
        if (this.props.color && this.props.color.length > 0)
            nodeColor = this.props.color;
        else
            nodeColor = this.props.selectedColor;

        // To use the loading ind. and color for the loading indicator from the props, else choosing from the color picker
        if (this.props.pending && this.props.pending.length > 0) {
            content = this.props.pending;
            dynamicNodeDiv = (<SpinnerCircular id="spinnerCircular" className="list-timeline-item-head list-timeline-item-head-blue" size={400} thickness={300} speed={99} color={nodeColor} secondaryColor="rgba(172, 57, 59, 0)" />)
        }
        // To use the pending icon and color for the pending icon from props, else choosing from the color picker
        else if (this.props.dot && this.props.dot.length > 0) {
            content = this.props.children;
            dynamicNodeDiv = (
                <FontAwesomeIcon icon={faClock} id="spinnerCircular" className="list-timeline-item-head list-timeline-item-head-blue" style={{ color: nodeColor }} />
            );
        }
        else {
            content = this.props.children;
            dynamicNodeDiv = (<div className="list-timeline-item-head list-timeline-item-head-blue clock outline" style={{ borderColor: nodeColor }}>
            </div>);
        }

        return (
            <Auxillary>
                <li className={"list-timeline-item list-timeline-item-" + mode}>
                    <div className="list-timeline-item-label">{this.props.label}</div>
                    <div className="list-timeline-item-tail"></div>
                    {dynamicNodeDiv}
                    <div className="list-timeline-item-content">{content}</div>
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