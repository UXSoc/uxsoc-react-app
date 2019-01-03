import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
import SectionToggleEvents from './../../state/SectionToggle/SectionToggle';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage } from './../../stateless/Events/EventDetails';
import { AuthorPic, AuthorName } from './../../stateless/Author/Author';
import MemberStory from '../MemberStory/MemberStory'
import { MemberStoriesImage, MemberStoriesLabel, MemberStoriesTitle } from './../../stateless/MemberStories/MemberStories';
import OpportunityCard from '../../stateless/Opportunities/OpportunityCard';

import Books from '../../stateless/Resources/Books/Books';
import Articles from '../../stateless/Resources/Articles/Articles';
import Podcasts from '../../stateless/Resources/Podcasts/Podcasts';

import ContactForm from './../../state/ContactForm/ContactForm';
import RedirectButton from './../../state/RedirectButton/RedirectButton';

import landingImage from './../../../resources/img/community-landing.svg';
import opportunitiesImage from './../../../resources/img/community-opportunities.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';

import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

import './style.css';

class Community extends Component {
  state = {
    whatsHappening: []
  }
  componentDidMount = async () => {
    // const { data } = await fetch(
    //   "https://admu.directus.uxsociety.org/api/1.1/tables/community"
    // )
    // console.log(data)

    const data = await fetch("http://178.128.60.23:1337/events").then(data => {
      return data.json()
    })


    this.setState({
      whatsHappening: data
    })
  }

  render() {
    const { whatsHappening } = this.state
    const lastEl = whatsHappening.length  - 1
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

        <div className="events-container" id="events">
          <p className="section-label">Events</p>
          <h2>What's happening</h2>
          <SectionToggleEvents toggleLabel1="Upcoming" toggleLabel2="Past" />
          <div className="event-card">
            <div className="event-info">
              <EventLabel
                eventLabel={
                  (whatsHappening[lastEl] && whatsHappening[lastEl].Category) ||
                  "Information Architecture"
                }
              />
              <EventName
                eventName={
                  (whatsHappening[lastEl] && whatsHappening[lastEl].Name) ||
                  "UX&Chill Ep 08"
                }
              />

              <EventDetails
                date={(whatsHappening[lastEl] && whatsHappening[lastEl].DateTimeString) ||"24 September 2018, 5:00 to 7:30 PM"}
                location={
                  (whatsHappening[lastEl] && whatsHappening[lastEl].Location) ||
                  "Faura Hall, Ateneo de Manila University"
                }
                speaker={
                  (whatsHappening[lastEl] && whatsHappening[lastEl].Speaker) || "Avery Si"
                }
              />

              <AboutHeader aboutHeader="About the event"/>
              <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur."/>
              <AboutHeader aboutHeader="About the speaker"/>
              <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur."/>

              <RedirectButton
                buttonText="Register Now"
                redirectLink="/"/>

            </div>
            <EventImage />
          </div>
        </div>

        <div className="ms-container" id="member-stories">
          <p className="section-label">Member Stories</p>
          <h2>Read up on a fellow member's UX journey</h2>
          <div className="ms-content-container">
            <MemberStoriesImage />
            <div className="ms-card">
              <MemberStoriesLabel
                memberStoriesLabel="Featured"/>
              <MemberStoriesTitle
                memberStoriesTitle="How I fell in love with UXSoc's advocacy"/>
              <AuthorPic/>
              <AuthorName authorName="Jiggy Villanueva, Executive Vice President"/>

              <RedirectButton
                buttonText="Read Jiggy's Story"
                redirectLink="/member-story"/>

            </div>
          </div>
        </div>

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
      selectedResource: "Books",
      isSelected: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ selectedResource: e.target.value});
    // e.target.classList.add("selected");
  }

  render() {
    if (this.state.selectedResource === "Books") {
      return(
        <div className="Resources">
          <div className="resources-container" id="resources">
            <p className="section-label">Resources</p>
            <h2>Here are the resources we've curated for you this week</h2>
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
            <h2>Here are the resources we've curated for you this week</h2>
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
            <h2>Here are the resources we've curated for you this week</h2>
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
