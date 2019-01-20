import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import redirectArrow from './../../../resources/img/register-arrow.svg';
import './style.css';

class RedirectButton extends Component {
  render() {
    const { redirectLink, buttonText } = this.props;
    return(
      <Link to={redirectLink}>
        <div className="RedirectButton">
          <a style={{color: "#008ed4"}} href={redirectLink}>
            {buttonText}
            <img src={redirectArrow} alt="arrow"/>
          </a>
        </div>
      </Link>
    )
  }
}

export default RedirectButton;
