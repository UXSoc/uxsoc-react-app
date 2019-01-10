import React, { Component } from 'react';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage, PastResources } from '../ResourceCard/ResourceCard';
import { AuthorPic, AuthorName } from '../../Author/Author';
import articleImage from '../../../../../src/resources/img/article-img.svg';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';

class Articles extends Component {
  render() {
    return(
      <div className="Articles">
        <div className="resource-content-container">
          <div className="resource-card">
            <ResourceLabel resourceLabel="Article"/>
            <ResourceTitle resourceTitle="UI Design in Different Countries"/>
            <AuthorPic />
            <AuthorName authorName="Cuberto" />
            <ResourceDesc resourceDesc="This article focuses on our experience with products developed with different cultural target audiences in mind." />
            <RedirectButton buttonText="Start Reading" redirectLink="/"/>
          </div>
          <ResourceImage resourceImage={articleImage}/>
          <PastResources pastResources={"/"}/>
        </div>
      </div>
    )
  }
}

export default Articles;