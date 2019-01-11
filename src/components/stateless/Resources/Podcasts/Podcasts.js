import React, { Component } from 'react';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage, ResourceLink, PastResources } from '../ResourceCard/ResourceCard';
import podcastImage from '../../../../../src/resources/img/podcast-img.svg';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';

import '../style.css';

class Podcasts extends Component {
  render() {
    return(
      <div className="Podcasts">
        <div className="resource-content-container">
          <div className="resource-card">
            <ResourceLabel resourceLabel="Podcast"/>
            <ResourceTitle resourceTitle="University Design Overlord"/>
            <ResourceLink resourceLink="https://rootspodcast.design/"/>
            <ResourceDesc resourceDesc="In this episode, we discuss about design education, mentorship, university courses, internships, product design and a lot more." />
            <RedirectButton buttonText="Start Listening" redirectLink="/"/>
          </div>
          <ResourceImage resourceImage={podcastImage}/>
          <PastResources pastResources={"/"}/>
        </div>
      </div>
    )
  }
}

export default Podcasts;