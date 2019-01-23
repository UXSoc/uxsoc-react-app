import React, { Component } from 'react';
import './style.css'
// import mainImage from '../../../resources/img/work-imgs/productivity.svg'
import illustrationSecurity from '../../../../src/resources/img/member-story-imgs/illustration-security.svg'
import jiggy from './../../../resources/others/jiggy.JPG';

class MainMemberStory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
        <div className="memberStoryMainPage">
          <div className="memberStoryHeader">
            <div className="MSheaderText">
              <h4 className="memberStoryHeader">MEMBER STORIES</h4>
              <h1 className="storyTitle">How I fell in love with UXSoc's <br />advocacy</h1>
              <div className="memberStoryAuthor">
                <div className="authorAndPosition">
                  <span className="ellipse"><img src={jiggy} alt="author" width="35" style={{borderRadius: '50%'}}/></span>
                  <span>Jiggy Villanueva, Executive Vice President</span>
                </div>
              </div>
                <div className="security-img">
                  <img src={illustrationSecurity} alt="security"></img>
                </div>
            </div>
          </div>

          <div className="memberStoryText">
            <h2 className="memberStoryContentHeaders">How it started</h2>
            <div className="memberStoryParagraphBox">
              <p>This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients.
              </p>
            </div>
          </div>

          <div className="memberStoryText">
            <h2 className="memberStoryContentHeaders">The passion came flowing</h2>
              <div className="memberStoryParagraphBox">
                <p>This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients.
                </p>
              </div>
              <div className="memberStoryParagraphBox">
                <p>
                This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients.
                </p>
              </div>
            </div>

            <div className="memberStoryText">
              <h2 className="memberStoryContentHeaders">The passion came flowing</h2>
              <div className="memberStoryParagraphBox">
                <p>This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients.
                </p>
              </div>
              <div className="memberStoryParagraphBox">
                <p>
                This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients. This is our research phase. We try to get as much information about our client and their needs. We do stakeholder interviews, user surveys, competitive analysis, naturalistic observations, affinity mapping and brand workshops to understand the user needs and align it with the business goals of our clients.
                </p>
              </div>
            </div>

            {/* <div className="MSbottomImage">
              <img src = {rectangle} width="900" alt="rectangle"/>
            </div> */}

            {/* <div className = "MSbuttons">

              <Link to="/community">
                <div>
                    <h4 className="backButtonh4">BACK</h4>
                </div>
              </Link>

              <div>
                  <h4 className="otherStoriesButton">SEE OTHER MEMBER STORIES ⟶</h4>
              </div>

            </div> */}

        </div>

        );
    }
}

export default MainMemberStory;
