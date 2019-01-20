import React from 'react';

import productivityGirl from '../../../resources/img/work-imgs/productivity-2.svg'

import './style.css'

const Services = () => {
  return (
    <div className="services">
      <p className="section-label">Services</p>
      <h2>What we can do for you</h2>
      <div className="threeRows">
        <div className="row-1">
          <img src={productivityGirl} alt="service-1"/>
          <div className="row-1-text">
            <h3>Web Design and Development</h3>
            <p className="services-paragraph">We help you create effective products on the web,
            from aesthetics, flow to usability. We believe that we can
            create a competitive advantage to your organization
            through human-centered design. </p>
          </div>
        </div>

        <div>
          <div className="row-2">
            <div className="row-2-text">
              <h3>Product Review and Recommendation</h3>
              <p className="services-paragraph">Have a product to improve? Tell us about it. We help you
              identify which areas you can refine on and tell you the steps
              to take in order to achieve a better product for
              your customers.</p>
            </div>
            <img src={productivityGirl} alt="service-2"/>
          </div>
        </div>

        <div>
          <div className="row-3">
            <img src = {productivityGirl} alt="service-3"/>
            <div className="row-3-text">
              <h3>Design Workshops</h3>
              <p className="services-paragraph">
              Aside from product creation and redesign, we also hold
              different kinds of workshops that help you and your
              organization with your design needs. These workshops
              are designed to give you more perspective about your
              product, brand, or users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
