import React, { Component } from 'react';

import redirectArrow from './../../../resources/img/register-arrow.svg';
import './style.css';

class RedirectButton extends Component {
  render() {
    const { redirectLink, buttonText } = this.props;
    return(
      <div className="RedirectButton">
        <img src={redirectArrow} alt="arrow"/>
        <a href={redirectLink}>{buttonText}</a>
      </div>
    )
  }
}

export default RedirectButton;