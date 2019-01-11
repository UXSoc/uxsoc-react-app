import React, { Component } from 'react';
import { AuthorPic, AuthorName } from '../../stateless/Author/Author';
import RedirectButton from '../../state/RedirectButton/RedirectButton';
import msImage from './../../../resources/img/member-stories.png';
import './style.css';

class MemberStories extends Component {
  render() {
    return(
      <div className="MemberStories">
        <div className="ms-container" id="member-stories">
          <p className="section-label">Member Stories</p>
          <h2>Read up on a fellow member's UX journey</h2>
          <div className="ms-content-container">
            <MemberStoriesImage />
            <div className="ms-card">
              <MemberStoriesLabel
                memberStoriesLabel="Featured"/>
              <MemberStoriesTitle
                memberStoriesTitle="How I fell in love with UXSoc's advocacy"/>
              <AuthorPic/>
              <AuthorName authorName="Jiggy Villanueva, Executive Vice President"/>

              <RedirectButton
                buttonText="Read Jiggy's Story"
                redirectLink="/member-story"/>

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