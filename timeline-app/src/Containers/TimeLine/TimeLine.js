import React, { Component } from 'react'
import Auxillary from '../../HOC/Auxillary/Auxillary'

// A Componene for holding the Parent Unordered List
class TimeLine extends Component {
    render() {
        let dynamicDiv = this.props.children;

        // Case when no Timeline items are provided
        if(typeof dynamicDiv === "undefined")
        {
            dynamicDiv=(<li><h3 style={{textAlign:'center'}}>Please Enter a TimeLineItem !!</h3></li>)
        }
        
        return (
            <Auxillary>
                <ul className="list-timeline list-timeline-label" data-testid="ul-list">
                    {dynamicDiv}
                </ul>
            </Auxillary>
        )
    }
}

export default TimeLine;