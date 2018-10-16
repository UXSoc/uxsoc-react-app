import React, { Component } from 'react';
import './style.css'
import shield from '../../../resources/img/work-imgs/logo.svg'
import tugon from '../../../resources/img/work-imgs/tugon-logo.svg'
import lions from '../../../resources/img/work-imgs/LIONS-Logo.svg'
import uxph from '../../../resources/img/work-imgs/uxph.svg'


const Logos = () => {
return (
    <div className = "mainLogos">
                <div className = "indivLogos">
                    <div className="indivLogo shield">       
                     <img src={shield}></img>
                    </div>
                    <div className="indivLogo tugon">
                    <img src={tugon}></img>

                    </div>
                    <div className="indivLogo lions">
                    <img src={lions}></img>

                    </div>
                    <div className="indivLogo uxph">
                    <img src={uxph}></img>

                    </div>


                </div>
            </div>
)
}
 
export default Logos;