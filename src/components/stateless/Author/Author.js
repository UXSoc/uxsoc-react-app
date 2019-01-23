import React from 'react';
import './style.css';

const AuthorPic = props => {
  return <img className="AuthorPic" src={props.authorPic} alt="author"/>
}

const AuthorName = props => {
  return <p className="AuthorName">{props.authorName}</p>
}

export { AuthorPic, AuthorName }
