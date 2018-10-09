import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation';
import SectionToggle from './../../state/SectionToggle/SectionToggle';

import landingImage from './../../../resources/img/community-landing.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';
import registerArrow from './../../../resources/img/register-arrow.svg';
import calendar from './../../../resources/img/calendar.svg';
import location from './../../../resources/img/location.svg';
import speaker from './../../../resources/img/speaker.svg';

import './style.css';

class Community extends Component {
  render() {
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
              <p className="event-label">Information Architecture</p>
              <h2 className="event-name">UX&Chill Ep 08</h2>

              <ul className="event-details">
                <img src={calendar} alt="calender"/><li>24 September 2018, 5:00 to 7:30 PM</li>
                <img src={location} alt="location"/><li>Faura Hall, Ateneo de Manila University</li>
                <img src={speaker} alt="speaker"/><li>Avery Si</li>
              </ul>

              <h4 className="about-header">About the event</h4>
              <p className="about-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h4 className="about-header">About the speaker</h4>
              <p className="about-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <div className="register-btn">
                <a className="register" href="/">Register Now</a>
                <img className="register-icon" src={registerArrow} alt="arrow"/>
              </div>
            </div>
            <img className="event-img" src="https://images.unsplash.com/photo-1538981177685-1853528f4ab7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4636f39faac7e08212d191ecb3ab05d&auto=format&fit=crop&w=1569&q=80" alt="event"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
