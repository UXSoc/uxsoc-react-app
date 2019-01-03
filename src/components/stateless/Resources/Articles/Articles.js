import React, { Component } from 'react';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage, PastResources } from '../ResourceCard';
import { AuthorPic, AuthorName } from '../../Author/Author';
import bookCover from '../../../../../src/resources/img/book-cover.svg';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
class Articles extends Component {
  render() {
    return(
      <div className="Articles">
        <div className="resource-content-container">
          <div className="resource-card">
            <ResourceLabel resourceLabel="Book" />
            <ResourceTitle resourceTitle="The State of UX in Asia" />
            <AuthorPic />
            <AuthorName authorName="Ben Kim" />
            <ResourceDesc resourceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur." />
            <RedirectButton buttonText="Start Reading" redirectLink="/" />
          </div>
          <ResourceImage resourceImage={bookCover}/>
          <PastResources pastResources={"/"}/>
        </div>
      </div>
    )
  }
}

export default Articles;