import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation';
import SectionToggle from './../../state/SectionToggle/SectionToggle';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage } from './../../stateless/Events/EventDetails';

import landingImage from './../../../resources/img/community-landing.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';
import registerArrow from './../../../resources/img/register-arrow.svg';

import './style.css';

class Community extends Component {
  render() {
    const { registerLink } = this.props;
    return(
      <div>
        <Navigation/>
        <div className="community-landing-container">
          <p className="section-label">UX Society Community</p>
          <h2>Learn and grow with an amazing community</h2>
          <img className="community-landing-image" src={landingImage} alt="landing"/>
          <button className="round-btn">
            <img src={chevronDown} alt="down"/>
          </button>
        </div>
        <div className="community-events-container">
          <p className="section-label">Events</p>
          <h2>What's happening</h2>
          <SectionToggle
            toggleLabel1="Upcoming"
            toggleLabel2="Past"/>
          <div className="event-card">
            <div className="event-info">
              <EventLabel eventLabel="Information Architecture"/>
              <EventName eventName="UX&Chill Ep 08"/>

              <EventDetails
                date="24 September 2018, 5:00 to 7:30 PM"
                location="Faura Hall, Ateneo de Manila University"
                speaker="Avery Si"/>

              <AboutHeader aboutHeader="About the event"/>
              <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <AboutHeader aboutHeader="About the speaker"/>
              <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

              <div className="register-btn">
                <a className="register" href={registerLink}>Register Now</a>
                <img className="register-icon" src={registerArrow} alt="arrow"/>
              </div>
            </div>
            <EventImage/>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
