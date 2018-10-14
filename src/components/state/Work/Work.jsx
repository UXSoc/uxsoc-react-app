import React, { Component } from 'react';
import './style.css'
import tedx from '../../../resources/img/work-imgs/tedx.png'
import meeting from '../../../resources/img/work-imgs/meeting.png'
import laptop from '../../../resources/img/work-imgs/laptop.png'

class work extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "mainWork">
                <div className = "workHeaders">
                    <h4 className = "workHead">WORK</h4>
                    <h1 className = "caseStudies">Case Studies</h1>
                </div>
                <div className="tedxDiv">
                    <img src = {tedx}></img>
                </div>
                <div className="meetingDiv">
                    <img src = {meeting}></img>
                </div>
                <div className="laptopDiv">
                    <img src = {laptop}>
                    
                    </img>
                </div>

            </div>
         );
    }
}
 
export default work;