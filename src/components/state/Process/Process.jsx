import React, { Component } from 'react';
import productivity2 from '../../../resources/img/work-imgs/productivity-1.svg';
import arrowRight from '../../../resources/img/work-imgs/arrowRight.svg';
import arrowLeft from '../../../resources/img/work-imgs/arrowLeft.svg';

import './style.css'

class Process extends Component {
  render() {
    return (
      <div className="process">
        <div className="headers">
          <p className="section-label">Process</p>
          <h2 className="method-title">The method to our madness</h2>
          <img src={productivity2} className="processImage" alt="process=1"/>
          <img src={arrowRight} className = "arrowRight" alt="arrow-right"/>
          <img src={arrowLeft} className = "arrowLeft" alt="arrow-left"/>
          <h2 className="discovery">01. Discovery</h2>
          <p className="discovery-text">This is our research phase. We try to get as much information about
            our client and their needs. We do stakeholder interviews, user surveys,
            competitive analysis, naturalistic observations, affinity mapping
            and brand workshops to understand the user needs and align it with
            the business goals of our clients.</p>
        </div>
      </div>
    );
  }
}

export default Process;
