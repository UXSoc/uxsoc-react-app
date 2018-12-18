import React, { Component } from 'react';

import locationIcon from './../../../resources/img/location.svg';
import './style.css';

class OpportunityCard extends Component {
  render() {
    const { position, location, type, experience, description } = this.props;
    return(
      <div className="OpportunityCard">
        <h3 className="opportunity-position">{position}</h3>
        <div className="opportunity-location">
          <img src={locationIcon} alt="location"/><li>{location}</li>
        </div>
        <div className="opportunity-type">{type}</div>
        <div className="opportunity-experience">{experience}</div>
        <p className="opportunity-desc">{description}</p>
      </div>
    )
  }
}

export default OpportunityCard;