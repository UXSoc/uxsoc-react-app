import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
// import MemberStory from '../MemberStory/MemberStory'

import Events from './../../state/Events/Events';
import MemberStories from './../../stateless/MemberStories/MemberStories';
import Opportunities from './../../stateless/Opportunities/Opportunities';
import Resources from './../../stateless/Resources/Resources';

import ContactForm from './../../state/ContactForm/ContactForm';

import landingImage from './../../../resources/img/community-landing.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';

import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

import './style.css';

class Community extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="landing-container">
          <p className="section-label">UX Society Community</p>
          <h2>Learn and grow with an amazing community</h2>
          <img className="landing-image" src={landingImage} alt="landing" />
          <button className="round-btn">
            <img src={chevronDown} alt="down" />
          </button>
        </div>

        <Events/>

        <MemberStories/>

        <Opportunities/>

        <Resources/>

        <div id="contact-us" className="contact-container">
          <ContactForm />
        </div>
      </div>
    );

  }
}

export default Community;
