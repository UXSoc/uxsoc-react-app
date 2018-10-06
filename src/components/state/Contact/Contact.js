import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  render() {
    const { sectionLabel, headerLabel, btnLabel } = this.props;
    return (
      <div className="Contact">
        <p className="section-label">{sectionLabel}</p>
        <h2>{headerLabel}</h2>
        <form>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="email" name="email" placeholder="Email Address"></input>
          <textarea placeholder="Your Message"></textarea>
          <button className="blue-btn-big">{btnLabel}</button>
        </form>
      </div>
    )
  }
}

export default Contact;