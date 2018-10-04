import React from 'react';
import logo from './../../../resources/logo/uxsoc-logo.svg';
import './style.css';

const Navigation = () => {
  return(
    <div>
      <nav className='navbar'>
        {/* UX Society Logo */}
        <div className='navbar-item'>
          <img alt='uxsoc-logo' src={logo}></img>
        </div>

        {/* About Us */}
        <div className='navbar-item'>
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
        <div className='navbar-item'>
          <div className='navbar-link'>Contact Us</div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
