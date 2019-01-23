import React from 'react';
import '../style.css';

const ResourceLabel = props =>{
  const { resourceLabel } = props;
  return(
    <p className="ResourceLabel">{resourceLabel}</p>
  );
}

const ResourceTitle = props => {
  const { resourceTitle } = props;
  return(
    <h2 className="ResourceTitle">{resourceTitle}</h2>
  )
}

const ResourceDesc = props => {
  const { resourceDesc } = props;
  return(
    <p className="ResourceDesc">{resourceDesc}</p>
  )
}

const ResourceImage = props => {
  const { resourceImage, imageWidth } = props;
  return(
    <div className="ResourceImage">
      <img src={resourceImage} width={imageWidth} alt="resource"/>
    </div>
  )
}


const ResourceLink = props => {
  const { resourceLink } = props;
  return(
    <div className="ResourceLink">
      <a style={{color: "#008ED4"}} href={resourceLink}>www.rootspodcast.design</a>
    </div>
  )
}

const PastResources = props => {
  const { pastResources } = props;
  return(
    <div className="PastResources">
      <a style={{color: "#008ed4"}} href={pastResources}>Browse through past resources</a>
    </div>
  )
}


export { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage, ResourceLink, PastResources };
