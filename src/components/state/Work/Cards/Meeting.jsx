import React, { Component } from 'react';
import meeting from '../../../../resources/img/work-imgs/meeting.png'

class Meeting extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <img src={meeting} alt="case-study"/>
                <div className="meetingTextBG">
            <h1 className="meetingText" ><a href={this.props.link} className="aMeeting">{this.props.text}</a></h1>
            </div>
            </div>
         );
    }
}

export default Meeting;
