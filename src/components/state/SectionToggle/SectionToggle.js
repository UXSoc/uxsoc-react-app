import React, { Component } from 'react';
import './style.css';

class SectionToggle extends Component {
  render() {
    const { toggleLabel1, toggleLabel2 } = this.props;
    return(
      <div className="SectionToggle">
        <button className="section-toggle selected">{toggleLabel1}</button>
        <button className="section-toggle unselected">{toggleLabel2}</button>
      </div>
    )
  }
}

export default SectionToggle;