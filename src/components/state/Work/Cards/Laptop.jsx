import React, { Component } from 'react';
import laptop from '../../../../resources/img/work-imgs/laptop.png'

import '../style.css'

class Laptop extends Component {
  render() {
    return (
      <div className="Laptop">
        <img src={laptop} alt="case-study"/>
        <div className="case-study-bg">
          <h1 className="case-study-text"><a href={this.props.link}>{this.props.text}</a></h1>
        </div>
      </div>
    );
  }
}

export default Laptop;
