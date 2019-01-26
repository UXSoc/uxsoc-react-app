import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class HomeCard extends Component {
  render() {
    const { sectionLabel, headerLabel, caption, btnLabel, link, image } = this.props;
    return(
      <div className="HomeCard">
        <img src={image} alt="people"></img>
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
