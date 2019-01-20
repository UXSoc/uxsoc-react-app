import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
import landingImage from './../../../resources/img/home-landing.svg';
import mobileLanding from './../../../resources/img/home-landing-mobile.svg';
import designLeaders from './../../../resources/img/design-leaders.svg';

import { HomeCardLeft, HomeCardRight } from '../../state/HomeCard/HomeCard';
import ContactForm from '../../state/ContactForm/ContactForm';
import Footer from './../../state/Footer/Footer';

import './style.css';

class Home extends Component {
  render() {
    return(
      <div>
        <Navigation/>
          <div className='home-landing-container'>
            <h3 className='north-star-title'>Our North Star</h3>
            <h1 className='main-title-leader'>We make <br/> design leaders</h1>
            <a className='journey-button' style={{color: "white"}}href="#blue-home">Start Your Journey</a>
            <img className='home-landing-image' src={landingImage} alt='landing'/>
            <img className='mobile-landing-image' src={mobileLanding} alt='mobile landing'/>
          </div>
          <div id="blue-home" className='home-blue-section'>
            <p className='home-blue-text'><strong>User Experience Society</strong> aims to guide the design
              leaders of tomorrow, creating products and <br/> services that will make the world <em>a better place</em></p>
            <img src={designLeaders} alt='design leaders' className='design-leaders-img'/>
          </div>
          <div className="HomeCard-container">
            <HomeCardLeft
              sectionLabel="Community"
              headerLabel="Geared for Growth"
              btnLabel="Experience the Mafia"
              link="/community"
              caption="Engage yourself with the community. Discover what you can do and how you can grow with us."/>
            <HomeCardRight
              sectionLabel="Consultancy"
              headerLabel="Crafted for Work"
              btnLabel="Explore our projects"
              link="/work"
              caption="We help businesses improve their products and services through intentional design, and we never fail to deliver."/>
          </div>
          <div id="contact-us" className="contact-container">
            <ContactForm/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default Home;
