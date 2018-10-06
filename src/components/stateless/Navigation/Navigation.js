import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../../../resources/logo/uxsoc-logo.svg';
import './style.css';

const Navigation = () => {
  return(
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* UX Society Logo */}
          <div className='navbar-item navbar-logo'>
            <Link to='/'>
              <img alt='uxsoc-logo' src={logo}/>
            </Link>
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
              <Link className='navbar-link' to='/contact'>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navigation;
