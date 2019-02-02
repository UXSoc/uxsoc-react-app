import React, { Component } from 'react';
import './style.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="Contact">
        <p className="section-label">Contact Us</p>
        <h2>We'd love to hear from you. Drop us a line below!</h2>

        <form name="contact" method="POST" data-netifly="true">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name"/>
          <input type="email" name="email" placeholder="Email Address"/>
          <textarea name="message" placeholder="Your Message"/>
          <button className="blue-btn-big" type="submit">Send Message</button>
        </form>
      </div>
    )
  }
}

export default ContactForm;
