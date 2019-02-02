import React, {Component} from 'react';

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
            <a href='/'>
              <img alt='uxsoc-logo' src={logo}/>
            </a>
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
              <a className='navbar-link' href='/about'>About Us</a>
            </div>

            {/* Community */}
            <div className='navbar-item'>
              <a className='navbar-link' href='/community'>Community</a>
            </div>

            {/* Work */}
            <div className='navbar-item'>
              <a className='navbar-link' href='/work'>Work</a>
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
      <a className='dropdown-link' href='/about'>
        <li>About Us</li>
      </a>
      <a className='dropdown-link' href='/community'>
        <li>Community</li>
      </a>
      <a className='dropdown-link' href='/work'>
        <li>Work</li>
      </a>
      <a className='dropdown-link' href='#contact-us'>
        <li>Contact Us</li>
      </a>
    </div>)
  }
}

export default Navigation;
