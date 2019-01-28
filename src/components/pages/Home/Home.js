import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
import landingImage from './../../../resources/img/home-landing.svg';
import designLeaders from './../../../resources/img/design-leaders.svg';
import {Helmet} from 'react-helmet'
import Image1 from './../../../resources/img/geared-for-growth.svg';
import Image2 from './../../../resources/img/crafted-for-work.svg';
import HomeCard from '../../state/HomeCard/HomeCard';
import ContactForm from '../../state/ContactForm/ContactForm';
import Footer from './../../state/Footer/Footer';

import './style.css';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return null;
  }
}


class Home extends Component {
  render() {
    return(
      <div>
        <Helmet>
          <meta name="generator" content="Page Generator v1.0.0"/>
          <meta name="description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

          <meta property="og:title" content="User Experience Society"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content="https://imgur.com/MovXZlH"/>
          <meta property="og:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

          <meta name="twitter:site" content="@uxsociety-website"/>
          <meta name="twitter:creator" content="@uxsocietyph"/>
          <meta name="twitter:title" content="User Experience Society"/>
          <meta name="twitter:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>
          <meta name="twitter:image" content="https://imgur.com/MovXZlH"/>
        </Helmet>
        <ScrollToTopOnMount/>
        <Navigation/>
          <div className='home-landing-container'>
            <h3 className='north-star-title'>Our North Star</h3>
            <h1 className='main-title-leader'>We make <br/> design leaders</h1>
            <a className='journey-button' style={{color: "white"}}href="#blue-home">Start Your Journey</a>
            <img className='home-landing-image' src={landingImage} alt='landing'/>
            <img className='mobile-landing-image' src={landingImage} alt='mobile landing'/>
          </div>
          <div id="blue-home" className='home-blue-section'>
            <p className='home-blue-text'><strong>User Experience Society</strong> aims to guide the design
              leaders of tomorrow, creating products and <br/> services that will make the world <em>a better place</em></p>
            <img src={designLeaders} alt='design leaders' className='design-leaders-img'/>
          </div>
          <div className="HomeCard-container">
            <HomeCard
              image={Image1}
              sectionLabel="Community"
              headerLabel="Geared for Growth"
              btnLabel="Experience the Mafia"
              link="/community"
              caption="Engage yourself with the community. Discover what you can do and how you can grow with us."/>
            <HomeCard
              image={Image2}
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
