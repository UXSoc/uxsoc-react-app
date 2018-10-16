import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation'
import './style.css';
<<<<<<< HEAD
import Header from '../../state/Headers/Header'
import Process from '../../state/Process/process'
import Services from '../../stateless/Services/Services'
import Workcomp from '../../state/Work/Work'
import Logos from '../../state/Logos/Logos'
import ContactForm from '../../state/ContactForm/ContactForm'
import HomeCard from '../../state/HomeCard/HomeCard'

import shield from '../../../resources/img/work-imgs/logo.svg'
import tugon from '../../../resources/img/work-imgs/tugon-logo.svg'
import lions from '../../../resources/img/work-imgs/LIONS-Logo.svg'
import uxph from '../../../resources/img/work-imgs/uxph.svg'

=======
import Header from '../../state/Headers/header'
import Process from '../../state/Process/process'
import Services from '../../stateless/Services/services'
import Workcomp from '../../state/Work/Work'
import Logos from '../../stateless/Logos/Logos'
import ContactForm from '../../state/ContactForm/ContactForm'
import HomeCard from '../../state/HomeCard/HomeCard'

>>>>>>> 74033146011d2cd606b63b102fd8294cbdca44b5

class Work extends Component {
  render() {
    
    return(
      <div className = "main">
        <Navigation/>
        <div className="main-under-navbar">
          <div>
            <Header />
          
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
<<<<<<< HEAD
          <Logos logo1={shield} logo2={tugon} logo3={lions} logo4={uxph}/>
=======
          <Logos />
>>>>>>> 74033146011d2cd606b63b102fd8294cbdca44b5
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
