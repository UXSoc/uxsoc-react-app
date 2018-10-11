import React, { Component } from 'react';

import calendarIcon from './../../../resources/img/calendar.svg';
import locationIcon from './../../../resources/img/location.svg';
import speakerIcon from './../../../resources/img/speaker.svg';
import eventImage from './../../../resources/img/sample-img.png';

import './style.css';

class EventDetails extends Component {
  render() {
    const { date, location, speaker } = this.props;
    return(
      <div className="EventDetails">
        <img src={calendarIcon} alt="calendar"/><li>{date}</li>
        <img src={locationIcon} alt="location"/><li>{location}</li>
        <img src={speakerIcon} alt="speaker"/><li>{speaker}</li>
      </div>
    )
  }
}

class EventLabel extends Component {
  render() {
    const { eventLabel } = this.props;
    return(
      <div className="EventLabel">
        <p>{eventLabel}</p>
      </div>
    )
  }
}

class EventName extends Component {
  render() {
    const { eventName } = this.props;
    return(
      <div className="EventName">
        <h2>{eventName}</h2>
      </div>
    )
  }
}

class AboutHeader extends Component {
  render() {
    const { aboutHeader } = this.props;
    return(
      <div className="AboutHeader">
        <h4>{aboutHeader}</h4>
      </div>
    )
  }
}

class AboutDesc extends Component {
  render() {
    const { aboutDesc } = this.props;
    return(
      <div className="AboutDesc">
        <p>{aboutDesc}</p>
      </div>
    )
  }
}

class EventImage extends Component {
  render() {
    return(
      <div className="EventImage">
        <img src={eventImage} alt="event"/>
      </div>
    )
  }
}

export { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage };