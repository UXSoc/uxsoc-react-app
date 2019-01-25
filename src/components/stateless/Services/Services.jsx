import React from 'react';
import Left from './../AboutValues/LeftValues';
import Right from './../AboutValues/RightValues';

import webDevelopment from './../../../resources/img/work-imgs/work-web.svg'
import productReview from './../../../resources/img/work-imgs/work-product.svg';
import designWorkshop from './../../../resources/img/work-imgs/work-design.svg'
import './style.css'

const Services = () => {
  return (
    <div className="services">
      <p className="section-label">Services</p>
      <h2>What we can do for you</h2>

      <Left title="Web Design and Development"
        details="We help you create effective products on the web,
        from aesthetics, flow to usability. We believe that we can
        create a competitive advantage to your organization
        through human-centered design."
        img={webDevelopment}/>

      <Right title="Product Review and Recommendation"
        details="Have a product to improve? Tell us about it. We help you
        identify which areas you can refine on and tell you the steps
        to take in order to achieve a better product for
        your customers."
        img={productReview}/>

      <Left title="Design Workshops"
        details="Aside from product creation and redesign, we also hold
        different kinds of workshops that help you and your
        organization with your design needs. These workshops
        are designed to give you more perspective about your
        product, brand, or users."
        img={designWorkshop}/>

    </div>
  )
}

export default Services;
