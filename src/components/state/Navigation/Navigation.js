import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from './../../../resources/logo/uxsoc-logo.svg';
import './style.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  render() {
    if (this.state.showMenu === true) {
      return(
        <div className="Navigation">
          <nav className='navbar'>
            <div className='navbar-container'>
              {/* UX Society Logo */}
              <div className='navbar-item navbar-logo'>
                <Link to='/'>
                  <img alt='uxsoc-logo' src={logo}/>
                </Link>
              </div>

              <div className='navbar-item navbar-menu' onClick={()=> {this.setState({showMenu: !this.state.showMenu})}}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="400" height="400" viewBox="0 0 200 200"><path className="menu-icon" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
              </div>

              <div className='navbar-mr'>
                {/* About Us */}
                <div className='navbar-item navbar-about'>
                  <Link className='navbar-link' to='/about'>About Us</Link>
                </div>

                {/* Community */}
                <div className='navbar-item'>
                  <Link className='navbar-link' to='/community'>Community</Link>
                </div>

                {/* Work */}
                <div className='navbar-item'>
                  <Link className='navbar-link' to='/work'>Work</Link>
                </div>

                {/* Contact Us */}
                <div className='navbar-item navbar-contact'>
                  <AnchorLink className='navbar-link' href='#contact-us'>Contact Us</AnchorLink>
                </div>
              </div>
            </div>
          </nav>
        <NavDropdown/>
        </div>
    );
    } else if (this.state.showMenu === false) {
      return (
        <div className="Navigation">
          <nav className='navbar'>
            <div className='navbar-container'>
              {/* UX Society Logo */}
              <div className='navbar-item navbar-logo'>
                <Link to='/'>
                  <img alt='uxsoc-logo' src={logo}/>
                </Link>
              </div>

              <div className='navbar-item navbar-menu' onClick={()=> {this.setState({showMenu: !this.state.showMenu})}}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="400" height="400" viewBox="0 0 200 200"><path className="menu-icon" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
              </div>

              <div className='navbar-mr'>
                {/* About Us */}
                <div className='navbar-item navbar-about'>
                  <Link className='navbar-link' to='/about'>About Us</Link>
                </div>

                {/* Community */}
                <div className='navbar-item'>
                  <Link className='navbar-link' to='/community'>Community</Link>
                </div>

                {/* Work */}
                <div className='navbar-item'>
                  <Link className='navbar-link' to='/work'>Work</Link>
                </div>

                {/* Contact Us */}
                <div className='navbar-item navbar-contact'>
                  <AnchorLink className='navbar-link' href='#contact-us'>Contact Us</AnchorLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }
}

class NavDropdown extends Component {
  render() {
    return(
      <div className="NavDropdown">
        <Link className='dropdown-link' to='/about'><li>About Us</li></Link>
        <Link className='dropdown-link' to='/community'><li>Community</li></Link>
        <Link className='dropdown-link' to='/work'><li>Work</li></Link>
        <AnchorLink className='dropdown-link' href='#contact-us'><li>Contact Us</li></AnchorLink>
      </div>
    )
  }
}

export default Navigation;
