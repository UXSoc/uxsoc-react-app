import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation'
import './style.css';
import Header from '../../state/Headers/header'
import Process from '../../state/Process/process'
import Services from '../../stateless/Services/services'
import Workcomp from '../../state/Work/Work'
import Logos from '../../stateless/Logos/Logos'
import ContactForm from '../../state/ContactForm/ContactForm'
import HomeCard from '../../state/HomeCard/HomeCard'


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
          <Logos />
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
