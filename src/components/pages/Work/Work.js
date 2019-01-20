import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
import ContactForm from '../../state/ContactForm/ContactForm';

// import Process from '../../state/Process/Process';
import Process from '../../state/Process/Process';
import Services from '../../stateless/Services/Services';
import Workcomp from '../../state/Work/Work';
import Footer from './../../state/Footer/Footer';

import Logos from '../../stateless/Logos/Logos';
import mainImage from '../../../resources/img/work-imgs/productivity.svg';
import shield from '../../../resources/img/work-imgs/logo.svg';
import tugon from '../../../resources/img/work-imgs/tugon-logo.svg';
import lions from '../../../resources/img/work-imgs/LIONS-Logo.svg';
import uxph from '../../../resources/img/work-imgs/uxph.svg';

import './style.css';

class Work extends Component {
  render() {
    return(
      <div className="Work">
        <Navigation/>
        <div className="landing-container">
          <p className="section-label">Work with UX Society</p>
          <h2>Crafting the best experiences to achieve your goals</h2>
          <button className="journey-button">Contact Us</button>
          <img src={mainImage} alt="work with ux society"></img>
        </div>

        <div id="process">
          <Process/>
        </div>

        <div id="services">
          <Services/>
        </div>

        <div id="work">
          <Workcomp/>
        </div>

        <div>
          <Logos logo1={shield} logo2={tugon} logo3={lions} logo4={uxph}/>
        </div>

        <div>
          <ContactForm />
        </div>
        <Footer/>
      </div>


    );
  }
}

export default Work;
