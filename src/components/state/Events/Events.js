import React, { Component } from 'react';

import UpcomingEvents from '../../state/Events/UpcomingEvents/UpcomingEvents';
import PastEvents from '../../state/Events/PastEvents/PastEvents';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: "Upcoming"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ selectedEvent: e.target.value});
  }

  render() {
    if (this.state.selectedEvent === "Upcoming") {
      return(
        <div className="Events">
          <div className="events-container" id="events">
            <p className="section-label">Events</p>
            <h2>What's happening</h2>
            <div className="SectionToggleEvents">
              <button className="section-toggle selected" value="Upcoming" onClick={this.handleClick}>Upcoming</button>
              <button className="section-toggle" value="Past" onClick={this.handleClick}>Past</button>
            </div>
            <UpcomingEvents/>
          </div>
        </div>
    )
    } else if (this.state.selectedEvent === "Past") {
      return(
        <div className="Events">
          <div className="events-container" id="events">
            <p className="section-label">Events</p>
            <h2>What's happening</h2>
            <div className="SectionToggleEvents">
              <button className="section-toggle" value="Upcoming" onClick={this.handleClick}>Upcoming</button>
              <button className="section-toggle selected" value="Past" onClick={this.handleClick}>Past</button>
            </div>
            <PastEvents/>
          </div>
        </div>
      )
    }
  }
}

export default Events;