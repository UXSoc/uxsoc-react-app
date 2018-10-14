import React, { Component } from 'react';
import Navigation from './../../stateless/Navigation/Navigation';
import { SectionToggleEvents, SectionToggleResources } from './../../state/SectionToggle/SectionToggle';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage } from './../../stateless/Events/EventDetails';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage, PastResources } from '../../stateless/Resources/ResourceCard';
import { AuthorPic, AuthorName } from './../../stateless/Author/Author';
import { MemberStoriesImage, MemberStoriesLabel, MemberStoriesTitle } from './../../stateless/MemberStories/MemberStories';
import ContactForm from './../../state/ContactForm/ContactForm';
import RedirectButton from './../../state/RedirectButton/RedirectButton';

import landingImage from './../../../resources/img/community-landing.svg';
import chevronDown from './../../../resources/img/chevron-down.svg';

import './style.css';

class Community extends Component {
  render() {
    return(
      <div>
        <Navigation/>
        <div className="landing-container">
          <p className="section-label">UX Society Community</p>
          <h2>Learn and grow with an amazing community</h2>
          <img className="landing-image" src={landingImage} alt="landing"/>
          <button className="round-btn">
            <img src={chevronDown} alt="down"/>
          </button>
        </div>

        <div className="events-container">
          <p className="section-label">Events</p>
          <h2>What's happening</h2>
          <SectionToggleEvents
            toggleLabel1="Upcoming"
            toggleLabel2="Past"/>
          <div className="event-card">
            <div className="event-info">
              <EventLabel eventLabel="Information Architecture"/>
              <EventName eventName="UX&Chill Ep 08"/>

              <EventDetails
                date="24 September 2018, 5:00 to 7:30 PM"
                location="Faura Hall, Ateneo de Manila University"
                speaker="Avery Si"/>

              <AboutHeader aboutHeader="About the event"/>
              <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <AboutHeader aboutHeader="About the speaker"/>
              <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <RedirectButton
                buttonText="Register Now"
                redirectLink="/"/>
            </div>
            <EventImage/>
          </div>
        </div>

        <div className="member-stories-container">
          <p className="section-label">Member Stories</p>
          <h2>Read up on a fellow member's UX journey</h2>
          <div className="member-stories-content-container">
            <MemberStoriesImage/>
            <div className="member-stories-card">
              <MemberStoriesLabel
                memberStoriesLabel="Featured"/>
              <MemberStoriesTitle
                memberStoriesTitle="How I fell in love with UXSoc's advocacy"/>
              <AuthorPic/>
              <AuthorName authorName="Jiggy Villanueva, Executive Vice President"/>
              <RedirectButton
                buttonText="Read Jiggy's Story"
                redirectLink="/"/>
            </div>
          </div>
        </div>

        <div className="resources-container">
          <p className="section-label">Resources</p>
          <h2>Here are the resources we've curated for you this week</h2>
          <SectionToggleResources
            toggleLabel1="Books"
            toggleLabel2="Articles"
            toggleLabel3="Podcasts"/>
          <div className="resource-content-container">
            <div className="resource-card">
                <ResourceLabel resourceLabel="Book"/>
                <ResourceTitle resourceTitle="The State of UX in Asia"/>
                <AuthorPic/>
                <AuthorName authorName="Ben Kim"/>
                <ResourceDesc resourceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."/>
                <RedirectButton
                  buttonText="Start Reading"
                  redirectLink="/"/>
              </div>
            <ResourceImage/>
            <PastResources/>
          </div>
        </div>
        <div id="contact-us" className="Contact-container">
          <ContactForm/>
        </div>
      </div>
    );
  }
}

export default Community;
