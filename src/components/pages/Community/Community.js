import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
// import MemberStory from '../MemberStory/MemberStory'
import {Helmet} from 'react-helmet'
import Events from './../../state/Events/Events';
import MemberStories from './../../stateless/MemberStories/MemberStories';
// import Opportunities from './../../stateless/Opportunities/Opportunities';
import Resources from './../../stateless/Resources/Resources';

import ContactForm from './../../state/ContactForm/ContactForm';
import Footer from './../../state/Footer/Footer';

import landingImage from './../../../resources/img/community-landing.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import './style.css';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return null;
  }
}


class Community extends Component {
  render() {
    return (
      <div className="Community">
      <Helmet>
        <title>User Experience Society</title>
        <meta name="generator" content="Page Generator v1.0.0"/>
        <meta name="description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

        <meta property="og:url" content="http://www.uxsociety.org/"/>

        <meta property="og:title" content="User Experience Society"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://i.imgur.com/DKAmvO4.jpg"/>
        <meta property="og:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

        <meta name="twitter:site" content="@uxsociety-website"/>
        <meta name="twitter:creator" content="@uxsocietyph"/>
        <meta name="twitter:title" content="User Experience Society"/>
        <meta name="twitter:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>
        <meta name="twitter:image" content="https://i.imgur.com/DKAmvO4.jpg"/>
      </Helmet>
        <ScrollToTopOnMount/>
        <Navigation />
        <div className="landing-container">
          <p className="section-label">UX Society Community</p>
          <h2>Learn and grow with an amazing community</h2>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <img className="landing-image" src={landingImage} alt="landing" />
          </ScrollAnimation>
          <a href='/community#events'>
            <button className="round-btn">
              <img src={chevronDown} alt="down" />
            </button>
          </a>
        </div>

        <div id="events">
          <Events/>
        </div>

        <div id="member-stories">
          <MemberStories/>
        </div>

        {/* <div id="opportunities">
          <Opportunities/>
        </div> */}

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
