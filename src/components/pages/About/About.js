import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../../state/Navigation/Navigation';
import AboutBox from './../../stateless/AboutBox/AboutBox';
import LeftValues from './../../stateless/AboutValues/LeftValues';
import RightValues from './../../stateless/AboutValues/RightValues';
import ContactForm from '../../state/ContactForm/ContactForm';
import Footer from './../../state/Footer/Footer';

import empathy from './../../../resources/img/about-img/empathy.svg'
import collaboration from './../../../resources/img/about-img/collaboration.svg'
import delivery from './../../../resources/img/about-img/delivery.svg';
import purpose from './../../../resources/img/about-img/purpose.svg'
import quality from './../../../resources/img/about-img/quality.svg';
import about from './../../../resources/img/community-opportunities.svg';
import './style.css';

class About extends Component {
  render() {

    const PageTitle = styled.h4`
      position: relative;
      text-align: center;
      margin-top: 150px;
      font-family: Montserrat, sans-serif;
    `
    const SectionTitle = styled.h1`
      text-align: center;
      font-family: Rubik;
      line-height: 60px;
      font-size: 50.97px;
      color: #20252B;

      @media (max-width: 768px) {
        width: 80%;
        margin: auto;
      }
    `


    return(
      <div>
        <Navigation/>
        <div>
          <PageTitle>About User Experience Society</PageTitle>
          <SectionTitle>Unleashing the Designer in You</SectionTitle>
        </div>
        <div className="about-ux">
          <img src={about} alt="About UX Society"/>
          <div className="about-uxsociety">
            <h2>What is User Experience Society</h2>
            <p>UX Society is a student organization that advocates and practices human-centered design in solving problems in the community</p>
          </div>
        </div>
        <div className="about-box">
          <AboutBox
            title="Vision"
            details="UX Society aims to nurture designers who are passionate about solving problems in the community through human-centered design"
          />
          <AboutBox
            title="Mission"
            details="UX Society empowers people through design education, enlightens them to the power of design, and nurtures them to create meaningful products for the community"
          />
        </div>
        <div className="about-CoreValues">
          <h1>Our Core Values</h1>
          <LeftValues
            title="Champion authentic user empathy"
            details="We at UX Society will always strive to empathize with our members. We listen to your needs, suggestions, opinions, and goals in the organization and translate these into projects, events, and initiatives to serve you better."
            img={empathy}
          />
          <RightValues
            title="Foster a collaborative environment"
            details="At UX Society, you will never be alone. Every project or initiative is done in a collaborative manner. Everyone is part of the team. Don't be afraid to ask help, mentorship, or advice."
            img={collaboration}
          />
          <LeftValues
            title="Value delivery over perfection"
            details="We want to maximize the value we give to our members. We believe that what we do does not have to be perfect to produce strong results. Completion produces results. Perfectionism delays and kills results."
            img={delivery}
          />
          <RightValues
            title="Maintain a shared sense of purpose"
            details="Our advocacy is what binds us together in UX Society. This is our north star. Everything we do is always guided by our drive to establish the importatn role of design in the community through the products we create, the events we hold, the speakers we invite, and the chapters we create."
            img={purpose}
          />
          <LeftValues
            title="Establish and uphold standards of quality"
            details="We believe that quality work we put out in the community represents who we are as an organization. Therefore, we aspire to create the best products that will not only help the community, but create an awareness that will transform people's perception of design."
            img={quality}
          />
        </div>
        <div id="contact-us" className="contact-container">
          <ContactForm/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
