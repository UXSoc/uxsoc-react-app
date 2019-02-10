import React, { Component } from 'react';
import { EventDetails, EventLabel, EventName, AboutHeader, AboutDesc, EventImage, EventImageMobile } from '../EventDetails/EventDetails';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import UXCrawl from './../../../../resources/others/uxcrawl-main.png';

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
      <div>
        <div className="event-card">
          <div className="event-info">
          <EventImageMobile eventImage={UXCrawl}/>
            <EventLabel
              eventLabel={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Category) ||
                "Company Tour"
              }
            />

            <EventName
              eventName={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Name) ||
                "UXCrawl"
              }
            />

            <EventDetails
              date={(whatsHappening[lastEl] && whatsHappening[lastEl].DateTimeString) ||"4 February 2019, 8:00 am to 7:00 pm"}
              location={
                (whatsHappening[lastEl] && whatsHappening[lastEl].Location) ||
                "Make Technology, On-Off Group, Globe Telecom & Mynt"
              }
              // speaker={
              //   (whatsHappening[lastEl] && whatsHappening[lastEl].Speaker) || "Avery Si"
              // }
            />

            <AboutHeader aboutHeader="About the event"/>
            <AboutDesc aboutDesc="Hey UXSoc! Who’s in the mood for a little field trip? 🚌 Buckle up and we’ll hit the gas! This year, we’re excited to introduce a brand new initiative we call: UX Crawl! We’re bringing you to the offices of some of Manila’s top design studios and tech companies! Get to see what it’s like to work as a design professional, and learn about how these companies do their UX magic. ✨👨‍💻👩‍💻 It’s a really good opportunity to meet new people, learn more about the design industry here in the Philippines, and jumpstart your career! This event is open to both UXers and Non-UXers. Start your year right, and board the fun bus with us on UX Crawl 2019!"/>
            {/* <AboutHeader aboutHeader="About the speaker"/>
            <AboutDesc aboutDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur."/> */}

            <RedirectButton
              buttonText="Read Our Article"
              redirectLink="https://medium.com/@harveyjaysison/ux-crawl-the-design-and-tech-pilgrimage-6589323dcc50"/>
          </div>
          <EventImage eventImage={UXCrawl}/>
        </div>
      </div>
    )
  }
}

export default PastEvents;
