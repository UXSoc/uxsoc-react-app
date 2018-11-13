import React, { Component } from 'react';
import './style.css'
import rectangle from '../../../resources/img/designlibrary-imgs/Rectangle.svg'
class MostPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
    render() { 
        
        return ( 
            <div className={`mostPopularSection ${this.props.class}`}>
                
                <div className = "wholeItemContainer">
                    <img src={rectangle}/>
                    <div className = "itemHeaderContainer"><h3 className="itemHeader">{this.props.hText}</h3></div>
                    <div className = "itemTextContainer"><p className="itemText">{this.props.pText}</p></div>
                </div>
            </div>
         );
    }
}
 
export default MostPopular;