import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation';
import landingImage from './../../../resources/img/home-landing.svg';
import blue1 from './../../../resources/img/home-blue1.svg';
import blue2 from './../../../resources/img/home-blue-2.svg';
import HomeCard from '../../stateless/HomeCard/HomeCard';
import './style.css';

class Home extends Component {
  render() {
    return(
      <div>
        <Navigation/>
          <div className='home-landing-container'>
            <h3 className='north-star-title'>Our North Star</h3>
            <h1 className='main-title-leader'>We make <br/> design leaders</h1>
            <button className='journey-button'>Start Your Journey</button>
            <img className='home-landing-image' src={landingImage} alt='landing'/>
          </div>
          <div className='home-blue-section'>
            <p className='home-blue-text'>User Experience Society aims to guide the design
              leaders of tomorrow, creating products and <br/> services that will make the world a better place</p>
            <img src={blue1} alt='blue1' className='blue1'/>
              <img src={blue2} alt='blue2' className='blue2'/>
          </div>
          <div className="HomeCards-container">
            <HomeCard
              cardLabel="Community"
              headerLabel="Geared for Growth"
              btnLabel="Experience the Mafia"
              caption="Engage yourself with the community. Discover what you can do and how you can grow with us."/>
            <HomeCard
              cardLabel="Consultancy"
              headerLabel="Crafted for Work"
              btnLabel="Explore our projects"
              caption="We help businesses explore improve their products and services through intentional design, and we never fail to deliver."/>
          </div>
      </div>
    );
  }
}

export default Home;
