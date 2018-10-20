import React, { Component } from 'react';
import laptop from '../../../../resources/img/work-imgs/laptop.png'

class Laptop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <img src={laptop}></img>
                <div className="tedXLaptoptextBG">
                    <h1 className="tedXLaptoptext"><a href={this.props.link}>{this.props.text}</a></h1>
                </div>
            </div>
         );
    }
}
 
export default Laptop;