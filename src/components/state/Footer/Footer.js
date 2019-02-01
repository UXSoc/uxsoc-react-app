import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../resources/logo/uxsoc-logo.svg';
import facebook from './../../../resources/img/facebook.svg';
import twitter from './../../../resources/img/twitter.svg';
import medium from './../../../resources/img/medium.svg';
import github from './../../../resources/img/github.svg';
import './style.css';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <Link to='/'>
              <img alt='uxsoc-logo' src={logo}/>
            </Link>
          </div>

          <div className="footer-explore">
            <h4>Explore</h4>

            <div className="footer-explore-container">
              <Link to="/about">
                <p>About Us</p>
              </Link>
              <div className="footer-community">
                <Link to="/community">
                  <p>Community</p>
                </Link>

                <ul>
                  <Link to='/community#events'>
                    <li>Events</li>
                  </Link>
                  {/* <Link to='/community#member-stories'>
                    <li>Member Stories</li>
                  </Link>
                  <Link to="/community#opportunities">
                    <li>Opportunities</li>
                  </Link> */}
                  <Link to="/community#resources">
                    <li>Resources</li>
                  </Link>
                </ul>
              </div>
              <div className="footer-work">
                <Link to='/work'>
                  <p>Work</p>
                </Link>
                <ul>
                  <Link to='/work#process'>
                    <li>Process</li>
                  </Link>
                  <Link to='/work#services'>
                    <li>Services</li>
                  </Link>
                  {/* <Link to='/work#work'>
                    <li>Work</li>
                  </Link> */}
                </ul>
              </div>

              <p>Contact Us</p>
            </div>
            </div>


          <div className="footer-follow">
            <h4>Follow Us</h4>
            <div className="footer-icons">
              <a href='https://www.facebook.com/UXSoc/' target="_blank" rel="noopener noreferrer">
                <img alt='facebook-logo' src={facebook}/>
              </a>
              <a href='https://twitter.com/uxsocietyph' target="_blank" rel="noopener noreferrer">
                <img alt='twitter-logo' src={twitter}/>
              </a>
              <a href='https://medium.com/user-experience-society' target="_blank" rel="noopener noreferrer">
                <img alt='medium-logo' src={medium}/>
              </a>
              <a href='https://github.com/UXSoc' target="_blank" rel="noopener noreferrer">
                <img alt='github-logo' src={github}/>
              </a>
            </div>

          </div>
        </div>


        <div className="footer-credits">
          <p>Passionately made by User Experience Society</p>
          <p>Copyright &copy; 2019. All Rights Reserved</p>
        </div>


      </footer>
    )
  }
}

export default Footer;
