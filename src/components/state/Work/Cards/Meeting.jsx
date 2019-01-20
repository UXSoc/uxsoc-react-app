import React, { Component } from 'react';
import meeting from '../../../../resources/img/work-imgs/meeting.png'

import '../style.css'

class Meeting extends Component {
  render() {
    return (
      <div className="Meeting">
        <img src={meeting} alt="case-study"/>
        <div className="case-study-bg">
          <h1 className="case-study-text"><a href={this.props.link} className="aMeeting">{this.props.text}</a></h1>
        </div>
      </div>
    );
  }
}

export default Meeting;
