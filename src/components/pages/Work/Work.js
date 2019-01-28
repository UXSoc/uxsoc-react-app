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
import mainImage from '../../../resources/img/work-imgs/productivity.svg';
import shield from '../../../resources/img/work-imgs/logo.svg';
import tugon from '../../../resources/img/work-imgs/tugon-logo.svg';
import lions from '../../../resources/img/work-imgs/LIONS-Logo.svg';
import uxph from '../../../resources/img/work-imgs/uxph.svg';

import MetaImage from './../../../resources/img/community-landing.svg';
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
          <meta name="generator" content="Page Generator v1.0.0"/>
          <meta name="description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

          <meta property="og:title" content="User Experience Society"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content={MetaImage}/>
          <meta property="og:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

          <meta name="twitter:site" content="@uxsociety-website"/>
          <meta name="twitter:creator" content="@uxsocietyph"/>
          <meta name="twitter:title" content="User Experience Society"/>
          <meta name="twitter:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>
          <meta name="twitter:image" content={MetaImage}/>
        </Helmet>
        <ScrollToTopOnMount/>
        <Navigation/>
        <div className="work-container">
          <p className="section-label">Work with UX Society</p>
          <h2>Crafting the best experiences to achieve your goals</h2>
          <button className="journey-button">Contact Us</button>
          <div className="work-image">
            <img src={mainImage} alt="work with ux society"/>
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
