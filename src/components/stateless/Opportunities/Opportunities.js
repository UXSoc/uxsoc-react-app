import React, { Component } from 'react';

import OpportunityCard from './OpportunityCard/OpportunityCard';
import opportunitiesImage from './../../../resources/img/community-opportunities.svg';

import './style.css';

class Opportunities extends Component {
  render() {
    return(
      <div className="opportunities-container">
				<p className="section-label">Opportunities</p>
        <h2>Discover your passion through our curated list of job openings</h2>
        <img src={opportunitiesImage} className="opportunities-img" alt="opportunities"/>

        <div className="opportunities-content-container">
          <OpportunityCard
            companyName="Google"
            position="Visual Designer"
            location="Bonifacio Global City, Taguig, Philippines"
            type="Full-time"
            experience="2 yrs experience"
            description="At Google, Visual designers weave iconography, typography, color, space and texture together to help our users successfully navigate through our products."/>
          <OpportunityCard
            companyName="Google"
            position="Visual Designer"
            location="Bonifacio Global City, Taguig, Philippines"
            type="Full-time"
            experience="2 yrs experience"
            description="At Google, Visual designers weave iconography, typography, color, space and texture together to help our users successfully navigate through our products."/>
          <OpportunityCard
            companyName="Google"
            position="Visual Designer"
            location="Bonifacio Global City, Taguig, Philippines"
            type="Full-time"
            experience="2 yrs experience"
            description="At Google, Visual designers weave iconography, typography, color, space and texture together to help our users successfully navigate through our products."/>
          <OpportunityCard
            companyName="Google"
            position="Visual Designer"
            location="Bonifacio Global City, Taguig, Philippines"
            type="Full-time"
            experience="2 yrs experience"
            description="At Google, Visual designers weave iconography, typography, color, space and texture together to help our users successfully navigate through our products."/>
        </div>
      </div>
    )
  }
}

export default Opportunities;
