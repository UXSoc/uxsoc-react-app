import React, { Component } from 'react';
import './style.css';

class SectionToggleEvents extends Component {
  render() {
    const { toggleLabel1, toggleLabel2 } = this.props;
    return(
      <div className="SectionToggleEvents">
        <button className="section-toggle selected">{toggleLabel1}</button>
        <button className="section-toggle unselected">{toggleLabel2}</button>
      </div>
    )
  }
}

export default SectionToggleEvents;