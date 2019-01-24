import React from 'react';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage } from '../ResourceCard/ResourceCard';
import podcastImage from './../../../../resources/others/alexis.jpg';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';

import '../style.css';

const Podcasts = () => {
  return(
    <div className="Podcasts">
      <div className="resource-content-container">
        <div className="resource-card">
          <ResourceLabel resourceLabel="Podcast"/>
          <ResourceTitle resourceTitle="Roots"/>
          <ResourceDesc resourceDesc="Roots is a podcast about the stories of Filipino designers, hosted and produced by Alexis Collado." />
          <div style={{marginTop: '60px'}}>
            <RedirectButton idTag="resource-button" buttonText="Start Listening" redirectLink="https://rootspodcast.design/"/>
          </div>
        </div>
        <ResourceImage resourceImage={podcastImage} imageWidth="600"/>
        {/* <PastResources pastResources={"/"}/> */}
      </div>
    </div>
  )
}

export default Podcasts;
