import React, { Component } from 'react'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import { connect } from 'react-redux'

// A Componene for holding the Parent Unordered List
class TimeLine extends Component {
    render() {
        let dynamicDiv = this.props.children;
        let reverseList = '';


        // Case when no Timeline items are provided
        if (typeof dynamicDiv === "undefined") {
            dynamicDiv = (<li><h3 style={{ textAlign: 'center' }}>Please Enter a TimeLineItem !!</h3></li>)
        }
        else if (this.props.reverse === true) {
            reverseList = "reverse";
        }

        return (
            <Auxillary>
                <ul className={"list-timeline list-timeline-label " + reverseList} data-testid="ul-list">
                    {dynamicDiv}
                </ul>
            </Auxillary>
        )
    }
}

// To fetch the Store State as props
const mapStateToProps = (state) => {
    return {
        userSelectedMode: state.DisplayModeReducer.userSelectedMode,
        selectedColor: state.DisplayModeReducer.selectedColor,
        reverse: state.DisplayModeReducer.reverse
    }
}

// Connect the compone to the Global Store
export default connect(mapStateToProps)(TimeLine);
