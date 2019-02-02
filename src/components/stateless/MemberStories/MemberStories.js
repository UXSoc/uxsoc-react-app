import React, { Component } from 'react';
import { AuthorPic, AuthorName } from '../../stateless/Author/Author';
import RedirectButton from '../../state/RedirectButton/RedirectButton';
import frances from './../../../resources/others/frances.png';
import msImage from './../../../resources/others/frances-article.jpeg';
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
                memberStoriesLabel="Featured"/>
              <MemberStoriesTitle
                memberStoriesTitle="How to Start Your Passion Project and Make Time for It"/>
              <AuthorPic authorPic={frances}/>
              <AuthorName authorName="Frances To, Vice President for UX Design"/>

              <RedirectButton
                buttonText="Read Frances's Story"
                redirectLink="https://medium.com/@francesto927/how-to-start-your-passion-project-and-make-time-for-it-d27687c7e47e"/>

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
