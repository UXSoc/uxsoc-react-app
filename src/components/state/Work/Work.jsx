import React, { Component } from 'react';

import Laptop from './Cards/Laptop'
import Meeting from './Cards/Meeting'
import TedX from './Cards/TedX'

import './style.css'

class Work extends Component {
  render() {
    return (
      <div className="case-studies">
        <p className="section-label">Work</p>
        <h2>Case Studies</h2>
        <TedX text="TedxADMU" link=""/>
        <Meeting text="TALAB" link=""/>
        <Laptop text="Office of Student Activities" link=""/>
      </div>
    );
  }
}

export default Work;
