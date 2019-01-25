import React, { Component } from 'react';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage, EventImageMobile } from '../EventDetails/EventDetails';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import Jffc from './../../../../resources/others/jffc.png';

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
      <div>
        <div className="event-card">
          <div className="event-info">
            <EventImageMobile eventImage={Jffc}/>
            <EventLabel
              eventLabel={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Category) ||
                "Conference"
              }
            />

            <EventName
              eventName={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Name) ||
                "Junior Form, Function, and Class"
              }
            />

            <EventDetails
              date={(whatsHappening[lastEl] && whatsHappening[lastEl].DateTimeString) ||"26-27 January 2019 7:30 am to 4:00 pm"}
              location={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Location) ||
                "De La Salle University - Manila"
              }
              // speaker={
              //   (whatsHappening[lastEl] && whatsHappening[lastEl].Speaker) || "Avery Si"
              // }
            />

            <AboutHeader aboutHeader="About the event"/>
            <AboutDesc aboutDesc="Junior Form, Function, and Class (JFFC) is an annual 2-day event and is Asia’s premiere student web design conference providing opportunities and learning experiences which help students develop their design skills further. "/>
            {/* <AboutHeader aboutHeader="About the speaker"/>
            <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur."/> */}

            <RedirectButton
              buttonText="Learn More"
              redirectLink="https://jffc.asia/"/>

          </div>
          <EventImage eventImage={Jffc}/>
        </div>
      </div>
    )
  }
}

export default UpcomingEvents;
