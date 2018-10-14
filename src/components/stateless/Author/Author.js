import React, { Component } from 'react';
import './style.css';

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
      <p className="AuthorName">{authorName}</p>
    )
  }
}

export { AuthorPic, AuthorName }