import React, {Component} from 'react';
import rectangle from '../../../resources/img/designlibrary-imgs/Rectangle.svg'
import'./style.css'
class AllTimeFavorites extends Component {
    state = {  }
    render() {
        return (

            <div className={`allTimeFavoritesSection ${this.props.class}`}>

            <div className="wholeItemContainer">
                <img src={rectangle} alt="all-time-favorite"/>
                <div className = "itemHeaderContainer"><h3 className="itemHeader">{this.props.hText}</h3></div>
                <div className = "itemTextContainer"><p className="itemText">{this.props.pText}</p></div>
            </div>
            </div>
         );
    }
}

export default AllTimeFavorites;
