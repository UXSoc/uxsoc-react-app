import React, { Component } from 'react';
import cardImage from './../../../resources/img/community-consultancy.svg';
import './style.css';

class HomeCard extends Component {
  render() {
    const { sectionLabel, headerLabel, caption, btnLabel } = this.props;
    return(
      <div className="HomeCard">
        <img src={cardImage} alt="people"></img>
        <p className="section-label">{sectionLabel}</p>
        <h2>{headerLabel}</h2>
        <p className="card-caption">{caption}</p>
        <button className="blue-btn-big">{btnLabel}</button>
      </div>
    )
  }
}

export default HomeCard;
