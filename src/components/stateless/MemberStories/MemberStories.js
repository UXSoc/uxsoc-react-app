import React, { Component } from 'react';
import msImage from './../../../resources/img/member-stories.png';
import './style.css';

class MemberStoriesImage extends Component {
  render() {
    return(
      <div className="MemberStoriesImage">
        <img src={msImage} alt="member stories"/>
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

export { MemberStoriesImage, MemberStoriesLabel, MemberStoriesTitle  };