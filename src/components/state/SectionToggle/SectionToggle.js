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

class SectionToggleResources extends Component {
  render() {
    const { toggleLabel1, toggleLabel2, toggleLabel3 } = this.props;
    return(
      <div className="SectionToggleResources">
        <button className="section-toggle selected">{toggleLabel1}</button>
        <button className="section-toggle unselected">{toggleLabel2}</button>
        <button className="section-toggle unselected">{toggleLabel3}</button>
      </div>
    )
  }
}

export { SectionToggleEvents, SectionToggleResources };