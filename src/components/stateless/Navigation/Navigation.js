import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import menuIcon from './../../../resources/img/menu.svg';
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

          <div className='navbar-item navbar-menu'>
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
  );
};

export default Navigation;
