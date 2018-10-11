import React, { Component } from 'react';

import redirectArrow from './../../../resources/img/register-arrow.svg';
import './style.css';

class RedirectButton extends Component {
  render() {
    const { redirectLink, buttonText } = this.props;
    return(
      <div className="RedirectButton">
        <a href={redirectLink}>{buttonText}</a>
        <img src={redirectArrow} alt="arrow"/>
      </div>
    )
  }
}

export default RedirectButton;