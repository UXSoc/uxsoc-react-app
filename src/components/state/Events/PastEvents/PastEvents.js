import React, { Component } from 'react';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage, EventImageMobile } from '../EventDetails/EventDetails';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import UXUni from './../../../../resources/others/uxuniversity-main.jpg';

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
    const lastEl = whatsHappening.length - 1
    return (
      <div>
        <div className="event-card">
          <div className="event-info">
            <EventImageMobile eventImage={UXUni} />
            <EventLabel
              eventLabel={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Category) ||
                "Competition"
              }
            />

            <EventName
              eventName={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Name) ||
                "UX University"
              }
            />

            <EventDetails
              date={(whatsHappening[lastEl] && whatsHappening[lastEl].DateTimeString) || "16 February, 23 February, 9 March 2019"}
              location={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Location) ||
                "Ateneo de Manila University"
              }
            // speaker={
            //   (whatsHappening[lastEl] && whatsHappening[lastEl].Speaker) || "Avery Si"
            // }
            />

            <AboutHeader aboutHeader="About the event" />
            <AboutDesc aboutDesc="UX University is a 2-day course and a 3-week competition created to engage you in user experience design through a series of workshops to build your skills and provide you the tools to accommodate issues in the community with design. 🌟 We aim to shape you as a design disruptor and make you recognize that design can be an intervention to certain issues. 🏄🚴‍♀️🤽🎨" />
            {/* <AboutHeader aboutHeader="About the speaker"/>
            <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur."/> */}

            <RedirectButton
              buttonText="Check it Out"
              redirectLink="https://www.facebook.com/pg/UXSoc/photos/?tab=album&album_id=1190381951143800" />
          </div>
          <EventImage eventImage={UXUni}/>
        </div>
      </div>
    )
  }
}

export default PastEvents;
