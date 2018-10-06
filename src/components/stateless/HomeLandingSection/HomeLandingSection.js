import React from 'react';
import landingImage from './../../../resources/img/image.svg';
import './style.css';

const HomeLandingSection = () => {
  return(
    <div className='home-landing-container'>
      <h3 className='north-star-title'>Our North Star</h3>
      <h1 className='main-title-leader'>We make <br/> design leaders</h1>
      <button className='journey-button'>Start Your Journey</button>
      <img className='home-landing-image' src={landingImage} alt='landing'/>
    </div>
  );
}

export default HomeLandingSection;
