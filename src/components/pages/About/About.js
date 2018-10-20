import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation'
import MemberStory from '../MemberStory/MemberStory'

import './style.css';

class About extends Component {
  render() {
    return(
      <div>
        <Navigation/>
        <MemberStory />
      </div>
    );
  }
}

export default About;
