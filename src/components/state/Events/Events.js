import React, { Component } from 'react';

import UpcomingEvents from '../../state/Events/UpcomingEvents/UpcomingEvents';
import PastEvents from '../../state/Events/PastEvents/PastEvents';

import './style.css';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: "Upcoming"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ selectedEvent: e.target.value });
  }

  render() {
    return(
      <div className="events-container">
        <p className="section-label">Events</p>
        <h2>What's happening</h2>
        <div className="SectionToggleEvents">
          <button className={this.state.selectedEvent === "Upcoming" ? "section-toggle selected" : "section-toggle"} value="Upcoming" onClick={this.handleClick}>Upcoming</button>
          <button className={this.state.selectedEvent === "Past" ? "section-toggle selected" : "section-toggle"} value="Past" onClick={this.handleClick}>Past</button>
        </div>
        {this.state.selectedEvent === "Upcoming" ? <UpcomingEvents/> : <PastEvents/>}
      </div>
    )
  }
}

export default Events;
