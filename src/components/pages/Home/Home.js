import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation';
import HomeLandingSection from './../../stateless/HomeLandingSection/HomeLandingSection';

class Home extends Component {
  render() {
    return(
      <div>
        <Navigation/>
        <HomeLandingSection/>
      </div>
    );
  }
}

export default Home;
