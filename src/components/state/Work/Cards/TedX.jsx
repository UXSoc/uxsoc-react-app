import React, { Component } from 'react';
import tedx from '../../../../resources/img/work-imgs/tedx.png'
class TedX extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="caseStudies">
            <img src = {tedx}></img>
            <div className="tedXLaptoptextBG">
            <h1 className="tedXLaptoptext" ><a href={this.props.link}>{this.props.text}</a></h1>
            </div>
            
            </div>
         );
    }
}
 
export default TedX;