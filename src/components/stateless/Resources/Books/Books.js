import React, { Component } from 'react';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage, PastResources } from '../ResourceCard/ResourceCard';
import { AuthorPic, AuthorName } from '../../Author/Author';
import bookCover from '../../../../../src/resources/img/book-cover.svg';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';

class Books extends Component {
  render() {
    return(
      <div className="Books">
        <div className="resource-content-container">
          <div className="resource-card">
            <ResourceLabel resourceLabel="Book" />
            <ResourceTitle resourceTitle="The State of UX in Asia" />
            <AuthorPic />
            <AuthorName authorName="Ben Kim" />
            <ResourceDesc resourceDesc="This is an annual report highlighting the State of User Experience Design and Research in the Asian continent. This report features real stories from UX Practitioners all over the region." />
            <RedirectButton buttonText="Start Reading" redirectLink="/" />
          </div>
          <ResourceImage resourceImage={bookCover}/>
          <PastResources pastResources={"/"}/>
        </div>
      </div>
    )
  }
}

export default Books;