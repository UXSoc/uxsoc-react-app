import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Navigation from '../../state/Navigation/Navigation';
import header from '../../../resources/img/designlibrary-imgs/header.svg'
import './style.css'

class DesignLibraryHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="designLibraryHeader">
                    <div className = "designLibraryHeaderText">
                        <h4 className = "articleSmallTitle">DESIGN LIBRARY</h4>
                        <div className="bigHeaderContainer"><h1 className = "articleBigHeader">A resource library for all your UX needs</h1></div>
                    </div>
                    <img src = {header}></img>

                </div> 
            </div>
         );
    }
}
 
export default DesignLibraryHeader;