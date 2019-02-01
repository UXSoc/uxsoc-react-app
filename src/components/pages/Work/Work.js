import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
import ContactForm from '../../state/ContactForm/ContactForm';
import {Helmet} from 'react-helmet';
// import Process from '../../state/Process/Process';
import Process from '../../state/Process/Process';
import Services from '../../stateless/Services/Services';
// import Workcomp from '../../state/Work/Work';
import Footer from './../../state/Footer/Footer';

import Logos from '../../stateless/Logos/Logos';
import mainImage from './../../../resources/illustrations/work-landing.png';
import shield from '../../../resources/img/work-imgs/logo.svg';
import tugon from '../../../resources/img/work-imgs/tugon-logo.png';
import lions from '../../../resources/img/work-imgs/LIONS-Logo.svg';
import uxph from '../../../resources/img/work-imgs/uxph.svg';
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import './style.css';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return null;
  }
}


class Work extends Component {
  render() {
    return(
      <div>
      <Helmet>
        <title>User Experience Society</title>
        <meta name="generator" content="Page Generator v1.0.0"/>
        <meta name="description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

        <meta property="og:url" content="http://www.uxsociety.org/"/>

        <meta property="og:title" content="User Experience Society"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://i.imgur.com/DKAmvO4.jpg"/>
        <meta property="og:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

        <meta name="twitter:site" content="@uxsociety-website"/>
        <meta name="twitter:creator" content="@uxsocietyph"/>
        <meta name="twitter:title" content="User Experience Society"/>
        <meta name="twitter:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>
        <meta name="twitter:image" content="https://i.imgur.com/DKAmvO4.jpg"/>
      </Helmet>
        <ScrollToTopOnMount/>
        <Navigation/>
        <div className="work-container">
          <p className="section-label">Work with UX Society</p>
          <h2>Crafting the best experiences to achieve your goals</h2>
          <a href="#contact-us"><button className="journey-button">Contact Us</button></a>
          <div className="work-image">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <img src={mainImage} alt="work with ux society"/>
            </ScrollAnimation>
          </div>

        </div>

        <div id="process">
          <Process/>
        </div>

        <div id="services">
          <Services/>
        </div>

        {/* <div id="work">
          <Workcomp/>
        </div> */}

        <div>
          <Logos logo1={shield} logo2={tugon} logo3={lions} logo4={uxph}/>
        </div>

        <div id="contact-us" className="contact-container">
          <ContactForm/>
        </div>
        <Footer/>
      </div>


    );
  }
}

export default Work;
