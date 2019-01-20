import React, { Component } from 'react';
import Navigation from '../../../state/Navigation/Navigation';
import Header from '../../../stateless/DesignLibraryHeader/DesignLibraryHeader'
import SectionSelect from '../../../state/DesignLibrarySectionSelect/DesignLibrarySectionSelect'
import MostPopular from '../../../stateless/MostPopular/MostPopular'
import AllTimeFavorites from '../../../stateless/AllTimeFavorites/AllTimeFavorites'
import './style.css'
class DesignLibraryArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const tempHText = "50 Things I've Learned from Spending 3 Years as a UX Intern";
        const tempPText = "Over the last 3 years, I've worked as a design intern at 2 independent advertising agencies...";
        return (
            <div>

            <Navigation />
            <div>
                <Header />
            </div>
            <div>
                <SectionSelect />
            </div>
            <div>
            <h3 className="MPHeader">Most Popular</h3>
                <MostPopular class = {"popular1"} hText = {tempHText}
                            pText = {tempPText}/>
                <MostPopular class = {"popular2"} hText = {tempHText}
                            pText = {tempPText}/>
                <MostPopular class = {"popular3"} hText = {tempHText}
                            pText = {tempPText}/>
                <MostPopular class = {"popular4"} hText = {tempHText}
                            pText = {tempPText}/>
                <MostPopular class = {"popular2"} hText = {tempHText}
                            pText = {tempPText}/>
                <MostPopular class = {"popular3"} hText = {tempHText}
                            pText = {tempPText}/>
            </div>
            <div>
                <h3 className="ATFHeader">All-Time Favorites</h3>
                <AllTimeFavorites class = {"faves1"} hText = {tempHText}
                            pText = {tempPText}/>
                <AllTimeFavorites class = {"faves2"} hText = {tempHText}
                            pText = {tempPText}/>
                <AllTimeFavorites class = {"faves3"} hText = {tempHText}
                            pText = {tempPText}/>
                <AllTimeFavorites class = {"faves1"} hText = {tempHText}
                            pText = {tempPText}/>
                <AllTimeFavorites class = {"faves2"} hText = {tempHText}
                            pText = {tempPText}/>
                <AllTimeFavorites class = {"faves3"} hText = {tempHText}
                            pText = {tempPText}/>

            </div>
            <div>

            </div>


          </div>

          );
    }
}

export default DesignLibraryArticles;
