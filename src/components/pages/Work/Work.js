import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation'
import './style.css';
import WorkWithUs from '../../state/Headers/WorkWithUs'
import Process from '../../state/Process/Process'
import Services from '../../stateless/Services/Services'
import Workcomp from '../../state/Work/Work'
import Logos from '../../state/Logos/Logos'
import ContactForm from '../../state/ContactForm/ContactForm'
import HomeCard from '../../state/HomeCard/HomeCard'

import shield from '../../../resources/img/work-imgs/logo.svg'
import tugon from '../../../resources/img/work-imgs/tugon-logo.svg'
import lions from '../../../resources/img/work-imgs/LIONS-Logo.svg'
import uxph from '../../../resources/img/work-imgs/uxph.svg'


class Work extends Component {
  render() {
    return(
      <div className = "main">
        <Navigation/>
        <div className="main-under-navbar">
          <div>
            <WorkWithUs />
          </div>
        </div>
        <div>
        <Process />
        </div>

        <div>
          <Services />
        </div>

        <div>
        <Workcomp />
        </div>

        <div>
          <Logos logo1={shield} logo2={tugon} logo3={lions} logo4={uxph}/>
        </div>

        <div>
          <ContactForm />
        </div>

        <div>
        </div>
      </div>
      
      
    );
  }
}

export default Work;
