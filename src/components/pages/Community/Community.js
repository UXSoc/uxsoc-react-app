import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation'
import landingImage from './../../../resources/img/community-landing.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';
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
      </div>
    );
  }
}

export default Community;
