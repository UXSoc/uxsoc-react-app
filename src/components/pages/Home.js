import React, { Component } from 'react';
import cardImage from '../../resources/img/community-consultancy.svg';
import './style.css';

class HomeCards extends Component {
  render() {
    return(
      <div className="HomeCards">
        <img src={cardImage} alt="people"></img>
        <p className="card-label">{this.props.cardLabel}</p>
        <h2>{this.props.headerLabel}</h2>
        <p className="card-caption">{this.props.caption}</p>
        <button>{this.props.btnLabel}</button>
      </div>
    )
  }
}

const CommunityConsultancy = () => {
  return(
    <div className="HomeCards-container">
      <HomeCards
        cardLabel="Community"
        headerLabel="Geared for Growth"
        btnLabel="Experience the Mafia"
        caption="Engage yourself with the community. Discover what you can do and how you can grow with us."/>
      <HomeCards
        cardLabel="Consultancy"
        headerLabel="Crafted for Work"
        btnLabel="Explore our projects"
        caption="We help businesses explore improve their products and services through intentional design, and we never fail to deliver."/>
    </div>
  )
}

export default CommunityConsultancy;