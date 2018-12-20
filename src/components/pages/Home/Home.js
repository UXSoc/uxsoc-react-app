import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Navigation from '../../state/Navigation/Navigation';
import landingImage from './../../../resources/img/home-landing.svg';
import mobileLanding from './../../../resources/img/home-landing-mobile.svg';
import blue1 from './../../../resources/img/home-blue1.svg';
import blue2 from './../../../resources/img/home-blue-2.svg';
import HomeCard from '../../state/HomeCard/HomeCard';
// import ContactForm from '../../state/ContactForm/ContactForm';

import Community from './../Community/Community';
import Work from './../Work/Work';

import './style.css';

class Home extends Component {
  render() {
    return(
      <div>
        <Navigation/>
          <div className='home-landing-container'>
            <h3 className='north-star-title'>Our North Star</h3>
            <h1 className='main-title-leader'>We make <br/> design leaders</h1>
            <AnchorLink className='journey-button' style={{color: "white"}}href="#blue-home">Start Your Journey</AnchorLink>
            <img className='home-landing-image' src={landingImage} alt='landing'/>
            <img className='mobile-landing-image' src={mobileLanding} alt='mobile landing'/>
          </div>
          <div id="blue-home" className='home-blue-section'>
            <p className='home-blue-text'><strong>User Experience Society</strong> aims to guide the design
              leaders of tomorrow, creating products and <br/> services that will make the world <em>a better place</em></p>
            <img src={blue1} alt='blue1' className='blue1'/>
            <img src={blue2} alt='blue2' className='blue2'/>
          </div>
          <div className="HomeCard-container">
            <HomeCard
              sectionLabel="Community"
              headerLabel="Geared for Growth"
              btnLabel="Experience the Mafia"
              link="/community"
              caption="Engage yourself with the community. Discover what you can do and how you can grow with us."/>
            <HomeCard
              sectionLabel="Consultancy"
              headerLabel="Crafted for Work"
              btnLabel="Explore our projects"
              caption="We help businesses improve their products and services through intentional design, and we never fail to deliver."/>
              link="/work"
              caption="We help businesses explore improve their products and services through intentional design, and we never fail to deliver."/>
          </div>
          {/* <div id="contact-us" className="contact-container">
            <ContactForm/>
          </div> */}
      </div>
    );
  }
}

export default Home;
