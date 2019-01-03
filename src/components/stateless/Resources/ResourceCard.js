import React, { Component } from 'react';
// import bookCover from './../../../resources/img/book-cover.svg';
import './style.css';

class ResourceLabel extends Component {
  render() {
    const { resourceLabel } = this.props;
    return(
      <p className="ResourceLabel">{resourceLabel}</p>
    );
  }
}

class ResourceTitle extends Component {
  render() {
    const { resourceTitle } = this.props;
    return(
      <h2 className="ResourceTitle">{resourceTitle}</h2>
    )
  }
}

class ResourceDesc extends Component {
  render() {
    const { resourceDesc } = this.props;
    return(
      <p className="ResourceDesc">{resourceDesc}</p>
    )
  }
}

class ResourceImage extends Component {
  render() {
    const { resourceImage } = this.props;
    return(
      <div className="ResourceImage">
        <img src={resourceImage} alt="resource"/>
      </div>
    )
  }
}

class PastResources extends Component {
  render() {
    const { pastResources } = this.props;
    return(
      <div className="PastResources">
        <a style={{color: "#008ed4"}} href={pastResources}>Browse through past resources</a>
      </div>
    )
  }
}
export { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage, PastResources };