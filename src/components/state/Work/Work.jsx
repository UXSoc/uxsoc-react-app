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
        <div>
          <TedX text="TedxADMU" link="http://alexiscollado.com/tedx.html"/>
          <Meeting text="TALAB" link="https://medium.com/user-experience-society/an-evaluation-of-the-talab-enlistment-process-3261cc5146"/>
          <Laptop text="Office of Student Activities" link=""/>
        </div>
      </div>
    );
  }
}

export default Work;
