import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../../state/Navigation/Navigation';
// import MemberStory from '../MemberStory/MemberStory'

import Events from './../../state/Events/Events';
import MemberStories from './../../stateless/MemberStories/MemberStories';
// import Opportunities from './../../stateless/Opportunities/Opportunities';
import Resources from './../../stateless/Resources/Resources';

import ContactForm from './../../state/ContactForm/ContactForm';
import Footer from './../../state/Footer/Footer';

import landingImage from './../../../resources/img/community-landing.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';

// import { Route, Switch } from 'react-router-dom'
// import { BrowserRouter } from "react-router-dom";

import './style.css';

class Community extends Component {
  render() {
    return (
      <div className="Community">
        <Navigation />
        <div className="landing-container">
          <p className="section-label">UX Society Community</p>
          <h2>Learn and grow with an amazing community</h2>
          <img className="landing-image" src={landingImage} alt="landing" />
          <Link to='/community#events'>
            <button className="round-btn">
              <img src={chevronDown} alt="down" />
            </button>
          </Link>
        </div>

        <div id="events">
          <Events/>
        </div>

        <div id="member-stories">
          <MemberStories/>
        </div>

        <div id="opportunities">
          {/* <Opportunities/> */}
        </div>

        <div id="resources">
          <Resources/>
        </div>

        <div id="contact-us" className="contact-container">
          <ContactForm />
        </div>

        <Footer/>
      </div>
    );

  }
}

export default Community;
