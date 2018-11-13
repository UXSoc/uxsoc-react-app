import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.css'
import blackLine from '../../../resources/img/designlibrary-imgs/BlackLine.svg'
import grayLine from '../../../resources/img/designlibrary-imgs/GrayLine.svg'
class DesignLibrarySectionSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sections">
                <div className="booksSection">
                <h5>Books</h5>
                <div className="line1"><img src={grayLine}/></div>
                </div>
                <div className="articlesSection">
                <h5>Articles</h5>
                <div className="line2"><img src={blackLine}/></div>
                </div>
                <div className="podcastsSection">
                <h5>Podcasts</h5>
                <div className="line3"><img src={grayLine}/></div>
                </div>
            </div>
         );
    }
}
 
export default DesignLibrarySectionSelect;