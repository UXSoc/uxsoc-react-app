import React, { Component } from 'react';
import './style.css'
import productivity2 from '../../../resources/img/work-imgs/productivity-1.svg'
import arrowRight from '../../../resources/img/work-imgs/arrowRight.svg'
import arrowLeft from '../../../resources/img/work-imgs/arrowLeft.svg'
<<<<<<< HEAD


=======
>>>>>>> 74033146011d2cd606b63b102fd8294cbdca44b5
class Process extends Component {
    state = {  }
    render() { 
        return ( 
<<<<<<< HEAD
            
        <div className = "process">



            <div className="headers">
           
           
=======
        <div className = "process">
            <div className="headers">
>>>>>>> 74033146011d2cd606b63b102fd8294cbdca44b5
                <h4 className="processMiniHeader">PROCESS</h4>
                <h1 className = "methodMadnessHeader">The method to our madness</h1>
                <img src={productivity2} className="processImage"></img>
                <img src={arrowRight} className = "arrowRight"></img>
                <img src={arrowLeft} className = "arrowLeft"></img>
                <h2 className="discovery">01. Discovery</h2>
                <p className="text">This is our research phase. We try to get as much information about 
            our client and their needs. We do stakeholder interviews, user surveys, 
            competitive analysis, naturalistic observations, affinity mapping 
            and brand workshops to understand the user needs and align it with 
            the business goals of our clients.
</p>
            </div>
            

        </div> 
        
        );
    }
}
 
export default Process;