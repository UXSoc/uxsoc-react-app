import React, { Component } from 'react';
import './style.css'
import shield from '../../../resources/img/work-imgs/logo.svg'
import tugon from '../../../resources/img/work-imgs/tugon-logo.svg'
import lions from '../../../resources/img/work-imgs/LIONS-Logo.svg'
import uxph from '../../../resources/img/work-imgs/uxph.svg'


class Logos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() 
    
    { 
       
        return ( 
            <div className = "mainLogos">
                <div className = "indivLogos">
                    <div className="indivLogo shield">       
                     <img src={this.props.logo1}></img>
                    </div>
                    <div className="indivLogo tugon">
                    <img src={this.props.logo2}></img>

                    </div>
                    <div className="indivLogo lions">
                    <img src={this.props.logo3}></img>

                    </div>
                    <div className="indivLogo uxph">
                    <img src={this.props.logo4}></img>

                    </div>

 
                </div>
            </div>
         );
    }
}
 
export default Logos;