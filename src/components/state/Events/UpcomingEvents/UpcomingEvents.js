import React, { Component } from 'react';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage, EventImageMobile } from '../EventDetails/EventDetails';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import UXChill from './../../../../resources/others/ux&chill2019.png';

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
    const lastEl = whatsHappening.length - 1
    return (
      <div>
        <div className="event-card">
          <div className="event-info">
            <EventImageMobile eventImage={UXChill} />
            <EventLabel
              eventLabel={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Category) ||
                "Design Conference"
              }
            />

            <EventName
              eventName={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Name) ||
                "UX & Chill 2019"
              }
            />

            <EventDetails
              date={(whatsHappening[lastEl] && whatsHappening[lastEl].DateTimeString) || "16 November 2019"}
              location={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Location) ||
                "Ateneo de Manila University"
              }
            // speaker={
            //   (whatsHappening[lastEl] && whatsHappening[lastEl].Speaker) || "Avery Si"
            // }
            />

            <AboutHeader aboutHeader="About the event" />
            <AboutDesc aboutDesc="Immerse in a one-day experience of passion and creativity in this year’s third UX&Chill production, featuring various workshops and inspiring talks from some of the nation’s finest UX experts! Join us as we come together and fulfill our advocacy by doing what we love to do the most – innovation, design-thinking, and user experience. Spark your passion. Chill with UX." />
            {/* <AboutHeader aboutHeader="About the speaker"/>
            <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur."/> */}

            <RedirectButton
              buttonText="Learn More"
              redirectLink="https://uxchill.uxsociety.org" />

          </div>
          <EventImage eventImage={UXChill} />
        </div>
      </div>
    )
  }
}

export default UpcomingEvents;
