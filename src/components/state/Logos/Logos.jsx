import React, { Component } from 'react';
import './style.css'


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
                     <img src={this.props.logo1} alt="logo1"/>
                    </div>
                    <div className="indivLogo tugon">
                    <img src={this.props.logo2} alt="logo2"/>

                    </div>
                    <div className="indivLogo lions">
                    <img src={this.props.logo3} alt="logo3"/>

                    </div>
                    <div className="indivLogo uxph">
                    <img src={this.props.logo4} alt="logo4"/>

                    </div>


                </div>
            </div>
         );
    }
}

export default Logos;
