import React, {Component} from 'react'
import playButton from '../../../resources/img/designlibrary-imgs/PlayButton.svg'
import './style.css'

class AllTimeFavoritePodcast extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <div className={`${this.props.class}`}>
                <div className="image">
                    <img src={this.props.image} alt="all-time-favorite-podcast" />
                </div>
                <div className="rightSideText">
                <div className = "podcastText">
                    <div><h4 className = "header">{this.props.headerText}</h4></div>
                    <div className = "secondHeaderContainer"><h5 className = "secondHeader">{this.props.secondHeaderText}</h5></div>
                    <div className = "paragraphContainer"><p className = "paragraph">{this.props.paragraphText}</p></div>

                </div>
                <div className="buttons">
                    <div><img src = {playButton} alt="play-button" /></div>
                    <div className = "barsContainer"></div>
                </div>
                </div>

            </div>
            </div>
         );
    }
}

export default AllTimeFavoritePodcast;
