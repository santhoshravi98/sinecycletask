import React, { Component } from 'react'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import '../TimeLine/TimeLine.css'


class TimeLine extends Component {
    render() {
        return (
            <Auxillary>
                <ul className="list-timeline list-timeline-label" data-testid="ul-list">
                    {this.props.children}
                </ul>
            </Auxillary>
        )
    }
}



export default TimeLine;