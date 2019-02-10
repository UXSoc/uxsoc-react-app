import React from 'react';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage } from '../ResourceCard/ResourceCard';
import { AuthorPic, AuthorName } from '../../Author/Author';
import articleImage from './../../../../resources/others/frances-article.jpeg';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import frances from './../../../../resources/others/frances.png';

const Articles = () => {
  return(
    <div className="Articles">
      <div className="resource-content-container">
        <div className="resource-card">
          <ResourceLabel resourceLabel="Article"/>
          <ResourceTitle resourceTitle="How to Start Your Passion Project and Make Time for It"/>
          <AuthorPic authorPic={frances}/>
          <AuthorName authorName="Frances To, Vice President for UX Design" />
          <ResourceDesc resourceDesc="This article will include tips drawn from my own experiences of doing passion projects, as well as steps on how you too can apply these in your own passion projects." />
          <div style={{marginTop: '60px'}}>
            <RedirectButton idTag="resource-button" buttonText="Start Reading" redirectLink="https://medium.com/@francesto927/how-to-start-your-passion-project-and-make-time-for-it-d27687c7e47e"/>
          </div>
        </div>
        <ResourceImage resourceImage={articleImage} imageWidth="1024"/>
        {/* <PastResources pastResources={"/"}/> */}
      </div>
    </div>
  )
}

export default Articles;
