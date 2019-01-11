import React, { Component } from 'react';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage } from '../EventDetails';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';

class UpcomingEvents extends Component {
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
          <EventImage/>
        </div>
      </div>
    )
  }
}

export default UpcomingEvents;