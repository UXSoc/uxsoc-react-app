import React, { Component } from 'react';
import './style.css'
import Laptop from './Cards/Laptop'
import Meeting from './Cards/Meeting'
import TedX from './Cards/TedX'

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className = "mainWork">
        <div className = "workHeaders">
            <h4 className = "workHead">WORK</h4>
            <h1 className = "caseStudies">Case Studies</h1>
        </div>
        <div className="tedxDiv">
            <TedX text="TedxADMU" link=""/>
        </div>
        <div className="meetingDiv">
            <Meeting text="TALAB" link=""/>
        </div>
        <div className="laptopDiv">
            <Laptop text="Office of Student Activities" link=""/>
        </div>

    </div> );
    }
}
 
export default Work;
