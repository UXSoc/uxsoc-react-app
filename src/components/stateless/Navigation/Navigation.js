import React from 'react';
import logo from './../../../resources/logo/uxsoc-logo.svg';
import './style.css';

const Navigation = () => {
  return(
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* UX Society Logo */}
          <div className='navbar-item navbar-logo'>
            <img alt='uxsoc-logo' src={logo}></img>
          </div>

          <div className='navbar-mr'>
            {/* About Us */}
            <div className='navbar-item navbar-about'>
              <div className='navbar-link'>About Us</div>
            </div>

            {/* Community */}
            <div className='navbar-item'>
              <div className='navbar-link'>Community</div>
            </div>

            {/* Work */}
            <div className='navbar-item'>
              <div className='navbar-link'>Work</div>
            </div>

            {/* Contact Us */}
            <div className='navbar-item navbar-contact'>
              <div className='navbar-link'>Contact Us</div>
            </div>
          </div>

        </div>
      </nav>
  );
}

export default Navigation;
