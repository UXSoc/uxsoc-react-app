import React, {Component} from 'react'
import './style.css'
import DesignLibraryHeader from '../../../stateless/DesignLibraryHeader/DesignLibraryHeader'
import SelectionSelect from '../../../state/DesignLibrarySectionSelect/DesignLibrarySectionSelect'
import personPic from '../../../../resources/img/designlibrary-imgs/PodcastPerson.png'
import MostPopularPodcasts from '../../../state/MostPopularPodcast/MostPopularPodcast'
import AllTimeFavoritePodcasts from '../../../state/AllTimeFavoritePodcast/AllTimeFavoritePodcast'

class DesignLibraryPodcast extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const tempHeaderText = "001: University Design Overlord";
        const tempSecondaryHeaderText = "EPISODE 01";
        const tempParagraphText = "I caught up with Andrew Aquino, a Filipino product designer who just started working at Facebook. In this episode, we discuss design education, mentorship, university courses, internships, product design and a lot more."
        return (  
            <div>
                <div>
                    <DesignLibraryHeader />
                </div>
                <div>
                    <SelectionSelect />
                </div>
                <div>
                    <h3 className="mostPopularHeader">Most Popular</h3>
                    <MostPopularPodcasts class = {"item"} image = {personPic} headerText = {tempHeaderText} 
                                        secondHeaderText = {tempSecondaryHeaderText} paragraphText = {tempParagraphText} />
                    <MostPopularPodcasts class = {"item"} image = {personPic} headerText = {tempHeaderText} 
                                        secondHeaderText = {tempSecondaryHeaderText} paragraphText = {tempParagraphText} />
                    <MostPopularPodcasts class = {"item"} image = {personPic} headerText = {tempHeaderText} 
                                        secondHeaderText = {tempSecondaryHeaderText} paragraphText = {tempParagraphText} />



                </div>
                <div>
                    <h3 className = "mostPopularHeader">All-Time Favorites</h3>
                    <AllTimeFavoritePodcasts class = {"item"} image = {personPic} headerText = {tempHeaderText} 
                                        secondHeaderText = {tempSecondaryHeaderText} paragraphText = {tempParagraphText} />
                    <AllTimeFavoritePodcasts class = {"item"} image = {personPic} headerText = {tempHeaderText} 
                                        secondHeaderText = {tempSecondaryHeaderText} paragraphText = {tempParagraphText} />
                    <AllTimeFavoritePodcasts class = {"item"} image = {personPic} headerText = {tempHeaderText} 
                                        secondHeaderText = {tempSecondaryHeaderText} paragraphText = {tempParagraphText} />
                    
                    
                </div>
            </div>
        );
    }
}
 
export default DesignLibraryPodcast;