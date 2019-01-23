import React, { Component } from 'react';
import meeting from '../../../../resources/img/work-imgs/meeting.png'

import '../style.css'

class Meeting extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <div className="Meeting">
          <img src={meeting} alt="case-study"/>
          <div className="case-study-bg">
            <h1 className="case-study-text"><a href={this.props.link} className="aMeeting" rel="noopener noreferrer">{this.props.text}</a></h1>
          </div>
        </div>
      </a>
    );
  }
}

export default Meeting;
