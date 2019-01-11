import React, { Component } from 'react';

import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import locationIcon from '../../../../resources/img/location.svg';
import companyLogo from '../../../../resources/img/company-logo.svg';

import '../style.css';

class OpportunityCard extends Component {
  render() {
    const { companyName, position, location, type, experience, description } = this.props;
    return(
      <div className="OpportunityCard">
        <img src={companyLogo} className="company-logo" alt="company logo"/>
        <p className="company-name">{companyName}</p>
        <h3 className="opportunity-position">{position}</h3>
        <div className="opportunity-location">
          <img src={locationIcon} alt="location"/><li>{location}</li>
        </div>
        <div className="opportunity-type">{type}</div>
        <div className="opportunity-experience">{experience}</div>
        <p className="opportunity-desc">{description}</p>
        <RedirectButton
          buttonText="Apply Now"
          redirectLink="/"/>
      </div>
    )
  }
}

export default OpportunityCard;