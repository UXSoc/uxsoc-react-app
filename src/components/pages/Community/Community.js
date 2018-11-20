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
import { Route, Switch } from 'react-router-dom'
import MemberStory from '../MemberStory/MemberStory'
import './style.css';
import { BrowserRouter } from "react-router-dom";

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

        <div className="events-container">
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

        <div className="ms-container">
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

        <div className="resources-container">
          <p className="section-label">Resources</p>
          <h2>Here are the resources we've curated for you this week</h2>
          <SectionToggleResources
            toggleLabel1="Books"
            toggleLabel2="Articles"
            toggleLabel3="Podcasts"
          />
          <div className="resource-content-container">
            <div className="resource-card">
              <ResourceLabel resourceLabel="Book" />
              <ResourceTitle resourceTitle="The State of UX in Asia" />
              <AuthorPic />
              <AuthorName authorName="Ben Kim" />
              <ResourceDesc resourceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur." />
              <RedirectButton buttonText="Start Reading" redirectLink="/" />
            </div>
            <ResourceImage />
            <PastResources />
          </div>
        </div>
        <div id="contact-us" className="contact-container">
          <ContactForm />
        </div>
      </div>
    );

  }
}

export default Community;
