import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import leftImage from './../../../resources/img/geared-for-growth.svg';
import rightImage from './../../../resources/img/crafted-for-work.svg';
import './style.css';

class HomeCardLeft extends Component {
  render() {
    const { sectionLabel, headerLabel, caption, btnLabel, link } = this.props;
    return(
      <div className="HomeCard HomeCardLeft">
        <img src={leftImage} alt="people"></img>
        <p className="section-label">{sectionLabel}</p>
        <h2>{headerLabel}</h2>
        <p className="card-caption">{caption}</p>
        <Link to={link}>
          <button className="blue-btn-big">{btnLabel}</button>
        </Link>
      </div>
    )
  }
}

class HomeCardRight extends Component {
  render() {
    const { sectionLabel, headerLabel, caption, btnLabel, link } = this.props;
    return(
      <div className="HomeCard HomeCardRight">
        <img src={rightImage} alt="people"></img>
        <p className="section-label">{sectionLabel}</p>
        <h2>{headerLabel}</h2>
        <p className="card-caption">{caption}</p>
        <Link to={link}>
          <button className="blue-btn-big">{btnLabel}</button>
        </Link>
      </div>
    )
  }
}

export { HomeCardLeft, HomeCardRight};
