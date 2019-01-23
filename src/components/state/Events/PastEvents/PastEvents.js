import React, { Component } from 'react';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage } from '../EventDetails/EventDetails';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import UXChill from './../../../../resources/others/UX&Chill 3.png';

class PastEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whatsHappening: []
    }
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
    return(
      <div className="UpcomingEvents">
        <div className="event-card">
          <div className="event-info">
            <EventLabel
              eventLabel={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Category) ||
                "Conference"
              }
            />

            <EventName
              eventName={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Name) ||
                "UX & Chill"
              }
            />

            <EventDetails
              date={(whatsHappening[lastEl] && whatsHappening[lastEl].DateTimeString) ||"13, 21, and 29 November 2018 5:00 to 7:00 pm"}
              location={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Location) ||
                "Ateneo de Manila University"
              }
              // speaker={
              //   (whatsHappening[lastEl] && whatsHappening[lastEl].Speaker) || "Avery Si"
              // }
            />

            <AboutHeader aboutHeader="About the event"/>
            <AboutDesc aboutDesc="Learn more about innovation, design-thinking, and all about user experience (UX) in this three-day workshop which will unfold over the month of November. UX&Chill aims to promote UX and its uses to various demographics, and invite experts to share about their expertise and journey in the UX industry."/>
            {/* <AboutHeader aboutHeader="About the speaker"/>
            <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur."/> */}

            <RedirectButton
              buttonText="Learn More"
              redirectLink="https://uxchill.uxsociety.org"/>
          </div>
          <EventImage eventImage={UXChill}/>
        </div>
      </div>
    )
  }
}

export default PastEvents;
