import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation';
import HomeLandingSection from './../../stateless/HomeLandingSection/HomeLandingSection';
import CommunityConsultancy from './../../stateless/HomeCards/HomeCards.js';

class Home extends Component {
  render() {
    return(
      <div>
        <Navigation/>
        <HomeLandingSection/>
        <CommunityConsultancy/>
      </div>
    );
  }
}

export default Home;
