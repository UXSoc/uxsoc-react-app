import React from 'react';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage } from '../ResourceCard/ResourceCard';
import { AuthorPic, AuthorName } from '../../Author/Author';
import articleImage from './../../../../resources/others/chapman.jpg';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import xavi from './../../../../resources/others/xavi.jpg';

const Articles = () => {
  return(
    <div className="Articles">
      <div className="resource-content-container">
        <div className="resource-card">
          <ResourceLabel resourceLabel="Article"/>
          <ResourceTitle resourceTitle="UX Society at Chapman University"/>
          <AuthorPic authorPic={xavi}/>
          <AuthorName authorName="Xavi Ablaza" />
          <ResourceDesc resourceDesc="Building a system for knowledge transfer and longevity." />
          <div style={{marginTop: '60px'}}>
            <RedirectButton idTag="resource-button" buttonText="Start Reading" redirectLink="https://medium.com/user-experience-society/ux-society-at-chapman-university-60dc17815230"/>
          </div>
        </div>
        <ResourceImage resourceImage={articleImage} imageWidth="720"/>
        {/* <PastResources pastResources={"/"}/> */}
      </div>
    </div>
  )
}

export default Articles;
