import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation'
import './style.css';

class About extends Component {
  render() {
    return(
      <div>
        <Navigation/>
        <span>About Page</span>
      </div>
    );
  }
}

export default About;
