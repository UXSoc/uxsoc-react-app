import React, { Component } from 'react';
import tedx from '../../../../resources/img/work-imgs/tedx.png'

import '../style.css'

class TedX extends Component {
  render() {
    return (
      <div className="TedX">
        <img src={tedx} alt="case-study"/>
        <div className="case-study-bg">
          <h1 className="case-study-text"><a href={this.props.link}>{this.props.text}</a></h1>
        </div>
      </div>
    );
  }
}

export default TedX;
