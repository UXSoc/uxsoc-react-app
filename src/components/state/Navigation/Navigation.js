import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
    return (<div className="Navigation">
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* UX Society Logo */}
          <div className='navbar-item navbar-logo'>
            <Link to='/'>
              <img alt='uxsoc-logo' src={logo}/>
            </Link>
          </div>

          <div className='navbar-item navbar-menu' onClick={() => {
              this.setState({
                showMenu: !this.state.showMenu
              })
            }}>
            <div className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
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
              <a className='navbar-link' href='#contact-us'>Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
      <div style={this.state.showMenu ? {display: 'block'} : {display: 'none'}}>
        <NavDropdown/>
      </div>
    </div>);
  }
}

class NavDropdown extends Component {
  render() {
    return (<div className="NavDropdown">
      <Link className='dropdown-link' to='/about'>
        <li>About Us</li>
      </Link>
      <Link className='dropdown-link' to='/community'>
        <li>Community</li>
      </Link>
      <Link className='dropdown-link' to='/work'>
        <li>Work</li>
      </Link>
      <a className='dropdown-link' href='#contact-us'>
        <li>Contact Us</li>
      </a>
    </div>)
  }
}

export default Navigation;
