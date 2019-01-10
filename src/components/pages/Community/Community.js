import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
// import MemberStory from '../MemberStory/MemberStory'

import Events from './../../state/Events/Events';
import MemberStories from './../../stateless/MemberStories/MemberStories';
import OpportunityCard from '../../stateless/Opportunities/OpportunityCard';

import Books from '../../stateless/Resources/Books/Books';
import Articles from '../../stateless/Resources/Articles/Articles';
import Podcasts from '../../stateless/Resources/Podcasts/Podcasts';

import ContactForm from './../../state/ContactForm/ContactForm';

import landingImage from './../../../resources/img/community-landing.svg';
import opportunitiesImage from './../../../resources/img/community-opportunities.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';

import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

import './style.css';

class Community extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="landing-container">
          <p className="section-label">UX Society Community</p>
          <h2>Learn and grow with an amazing community</h2>
          <img className="landing-image" src={landingImage} alt="landing" />
          <button className="round-btn">
            <img src={chevronDown} alt="down" />
          </button>
        </div>

        <Events/>

        <MemberStories/>

        <div className="opportunities-container" id="opportunities">
					<p className="section-label">Opportunities</p>
          <h2>Discover your passion through our curated list of job openings</h2>
          <img src={opportunitiesImage} alt="opportunities"/>

          <div className="opportunities-content-container">
            <OpportunityCard
              companyName="Google"
              position="Visual Designer"
              location="Bonifacio Global City, Taguig, Philippines"
              type="Full-time"
              experience="2 yrs experience"
              description="At Google, Visual designers weave iconography, typography, color, space and texture together to help our users successfully navigate through our products."/>
            <OpportunityCard
              companyName="Google"
              position="Visual Designer"
              location="Bonifacio Global City, Taguig, Philippines"
              type="Full-time"
              experience="2 yrs experience"
              description="At Google, Visual designers weave iconography, typography, color, space and texture together to help our users successfully navigate through our products."/>
            <OpportunityCard
              companyName="Google"
              position="Visual Designer"
              location="Bonifacio Global City, Taguig, Philippines"
              type="Full-time"
              experience="2 yrs experience"
              description="At Google, Visual designers weave iconography, typography, color, space and texture together to help our users successfully navigate through our products."/>
            <OpportunityCard
              companyName="Google"
              position="Visual Designer"
              location="Bonifacio Global City, Taguig, Philippines"
              type="Full-time"
              experience="2 yrs experience"
              description="At Google, Visual designers weave iconography, typography, color, space and texture together to help our users successfully navigate through our products."/>
          </div>
        </div>

        <Resources/>

        <div id="contact-us" className="contact-container">
          <ContactForm />
        </div>
      </div>
    );

  }
}

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResource: "Books"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ selectedResource: e.target.value});
  }

  render() {
    if (this.state.selectedResource === "Books") {
      return(
        <div className="Resources">
          <div className="resources-container" id="resources">
            <p className="section-label">Resources</p>
            <h2 className="main-title">Here are the resources we've curated for you this week</h2>
            <div className="SectionToggleResources">
              <button className="section-toggle selected" value="Books" onClick={this.handleClick}>Books</button>
              <button className="section-toggle" value="Articles" onClick={this.handleClick}>Articles</button>
              <button className="section-toggle" value="Podcasts" onClick={this.handleClick}>Podcasts</button>
            </div>
            <Books/>
          </div>
        </div>
    )
    } else if (this.state.selectedResource === "Articles") {
      return(
        <div className="Resources">
          <div className="resources-container" id="resources">
            <p className="section-label">Resources</p>
            <h2 className="main-title">Here are the resources we've curated for you this week</h2>
            <div className="SectionToggleResources">
              <button className="section-toggle" value="Books" onClick={this.handleClick}>Books</button>
              <button className="section-toggle selected" value="Articles" onClick={this.handleClick}>Articles</button>
              <button className="section-toggle" value="Podcasts" onClick={this.handleClick}>Podcasts</button>
            </div>
            <Articles/>
          </div>
        </div>
      )
    } else if (this.state.selectedResource === "Podcasts") {
      return(
        <div className="Resources">
          <div className="resources-container" id="resources">
            <p className="section-label">Resources</p>
            <h2 className="main-title">Here are the resources we've curated for you this week</h2>
            <div className="SectionToggleResources">
              <button className="section-toggle" value="Books" onClick={this.handleClick}>Books</button>
              <button className="section-toggle" value="Articles" onClick={this.handleClick}>Articles</button>
              <button className="section-toggle selected" value="Podcasts" onClick={this.handleClick}>Podcasts</button>
            </div>
            <Podcasts/>
          </div>
        </div>
      )
    }
  }
}

export default Community;
