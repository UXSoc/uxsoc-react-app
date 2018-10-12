import React, { Component } from 'react';
import RedirectButton from '../../state/RedirectButton/RedirectButton';
import bookCover from './../../../resources/img/book-cover.svg';
import './style.css';

class ResourceLabel extends Component {
  render() {
    const { resourceLabel } = this.props;
    return(
      <div className="ResourceLabel">
        <p>{resourceLabel}</p>
      </div>
    );
  }
}

class ResourceName extends Component {
  render() {
    const { resourceName } = this.props;
    return(
      <div className="ResourceName">
        <h2>{resourceName}</h2>
      </div>
    )
  }
}

class AuthorPic extends Component {
  render() {
    const { authorPic } = this.props;
    return(
      <div className="AuthorPic">{authorPic}</div>
    )
  }
}

class AuthorName extends Component {
  render() {
    const { authorName } = this.props;
    return(
      <div className="AuthorName">
        <p className="AuthorName">{authorName}</p>
      </div>
    )
  }
}

class ResourceDesc extends Component {
  render() {
    const { resourceDesc } = this.props;
    return(
      <div className="ResourceDesc">
        <p className="ResourceDesc">{resourceDesc}</p>
      </div>
    )
  }
}

class ResourceImage extends Component {
  render() {
    return(
      <div className="ResourceImage">
        <img src={bookCover} alt="resource"/>
      </div>
    )
  }
}
export { ResourceLabel, ResourceName, AuthorPic, AuthorName, ResourceDesc, ResourceImage };