import React, { Component } from 'react';
import './style.css'
<<<<<<< HEAD
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
=======
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
>>>>>>> 74033146011d2cd606b63b102fd8294cbdca44b5
