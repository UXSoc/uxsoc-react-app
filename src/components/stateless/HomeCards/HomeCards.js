import React, { Component } from 'react';
import cardImage from './../../../resources/img/community-consultancy.svg';
import './style.css';

class HomeCards extends Component {
  render() {
    const { cardLabel, headerLabel, caption, btnLabel } = this.props;
    return(
      <div className="HomeCards">
        <img src={cardImage} alt="people"></img>
        <p className="card-label">{cardLabel}</p>
        <h2>{headerLabel}</h2>
        <p className="card-caption">{caption}</p>
        <button>{btnLabel}</button>
      </div>
    )
  }
}

export default HomeCards;
