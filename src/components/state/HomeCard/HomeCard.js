import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import './style.css';

class HomeCard extends Component {
  render() {
    const { sectionLabel, headerLabel, caption, btnLabel, link, image } = this.props;
    return(
      <div className="HomeCard">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <img src={image} alt="people"/>
        </ScrollAnimation>

        <p className="section-label1">{sectionLabel}</p>
        <h2>{headerLabel}</h2>
        <p className="card-caption">{caption}</p>
        <Link to={link}>
          <button className="blue-btn-big">{btnLabel}</button>
        </Link>
      </div>
    )
  }
}

export default HomeCard;
