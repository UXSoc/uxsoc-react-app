import React, { Component } from 'react';

import calendarIcon from '../../../../resources/img/calendar.svg';
import locationIcon from '../../../../resources/img/location.svg';
// import speakerIcon from '../../../../resources/img/speaker.svg';

import '../style.css';

class EventDetails extends Component {
  render() {
    const { date, location } = this.props;
    return(
      <div className="EventDetails">
        <img src={calendarIcon} alt="calendar"/><li>{date}</li>
        <img src={locationIcon} alt="location"/><li>{location}</li>
        {/* <img src={speakerIcon} alt="speaker"/><li>{speaker}</li> */}
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
      <h2 className="EventName">{eventName}</h2>
    )
  }
}

class AboutHeader extends Component {
  render() {
    const { aboutHeader } = this.props;
    return(
      <h4 className="AboutHeader">{aboutHeader}</h4>
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
    const { eventImage } = this.props;
    return(
      <div className="EventImage">
        <img src={eventImage} alt="event"/>
      </div>
    )
  }
}

class EventImageMobile extends Component {
  render() {
    const { eventImage } = this.props;
    return(
      <div className="EventImageMobile">
        <img src={eventImage} alt="event"/>
      </div>
    )
  }
}

export { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage, EventImageMobile };
