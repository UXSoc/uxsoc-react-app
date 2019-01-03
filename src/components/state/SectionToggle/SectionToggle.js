import React, { Component } from 'react';
import './style.css';

class SectionToggleEvents extends Component {
  render() {
    return(
      <div className="SectionToggleEvents">
        <button className="section-toggle">Upcoming</button>
        <button className="section-toggle">Past</button>
      </div>
    )
  }
}

export default SectionToggleEvents;