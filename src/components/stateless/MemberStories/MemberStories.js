import React, { Component } from 'react';
import { AuthorPic, AuthorName } from '../../stateless/Author/Author';
import RedirectButton from '../../state/RedirectButton/RedirectButton';
import authorPic from './../../../resources/others/rafikoteh.jpeg';
import msImage from './../../../resources/others/uxcrawl-groupie.jpeg';
import './style.css';

class MemberStories extends Component {
  render() {
    return(
      <div className="MemberStories">
        <div className="ms-container">
          <p className="section-label">Member Stories</p>
          <h2>Read up on a fellow member's journey</h2>
          <div className="ms-content-container">
            <MemberStoriesImage />
            <div className="ms-card">
              <MemberStoriesLabel
                memberStoriesLabel="Featured Article"/>
              <MemberStoriesTitle
                memberStoriesTitle="Stops and Stories — Visiting the Top UX Teams in Manila at UX Crawl 2019"/>
              <AuthorPic authorPic={authorPic}/>
              <AuthorName authorName="Rafi Ko Teh, Member Development Officer"/>

              <RedirectButton
                buttonText="Read Rafi's Insight on UXCrawl"
                redirectLink="https://medium.com/user-experience-society/stops-and-stories-visiting-the-top-ux-teams-in-manila-at-ux-crawl-2019-35e4d8b768bb"/>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

class MemberStoriesImage extends Component {
  render() {
    return(
      <div className="MemberStoriesImage">
        <img src={msImage} className="ms-image" alt="member stories"/>
      </div>
    )
  }
}

class MemberStoriesLabel extends Component {
  render() {
    const { memberStoriesLabel } = this.props;
    return(
      <p className="MemberStoriesLabel">{memberStoriesLabel}</p>
    )
  }
}

class MemberStoriesTitle extends Component {
  render() {
    const { memberStoriesTitle } = this.props;
    return(
      <h2 className="MemberStoriesTitle">{memberStoriesTitle}</h2>
    )
  }
}

export default MemberStories;
