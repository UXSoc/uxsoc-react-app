import React, { Component } from 'react';

import Books from './Books/Books';
import Articles from './Articles/Articles';
import Podcasts from './Podcasts/Podcasts';

import './style.css';

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResource: "Books"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ selectedResource: e.target.value });
  }

  render() {
    if (this.state.selectedResource === "Books") {
      return(
        <div className="Resources">
          <div className="resources-container">
            <p className="section-label">Resources</p>
            <h2 className="main-title">Here are the resources we've curated for you this week</h2>
            <div className="SectionToggleResources">
              <button className="section-toggle selected" value="Books" onClick={this.handleClick}>Books</button>
              <button className="section-toggle" value="Articles" onClick={this.handleClick}>Articles</button>
              <button className="section-toggle" value="Podcasts" onClick={this.handleClick}>Podcasts</button>
            </div>
            <Books/>
          </div>
        </div>
    )
    } else if (this.state.selectedResource === "Articles") {
      return(
        <div className="Resources">
          <div className="resources-container" id="resources">
            <p className="section-label">Resources</p>
            <h2 className="main-title">Here are the resources we've curated for you this week</h2>
            <div className="SectionToggleResources">
              <button className="section-toggle" value="Books" onClick={this.handleClick}>Books</button>
              <button className="section-toggle selected" value="Articles" onClick={this.handleClick}>Articles</button>
              <button className="section-toggle" value="Podcasts" onClick={this.handleClick}>Podcasts</button>
            </div>
            <Articles/>
          </div>
        </div>
      )
    } else if (this.state.selectedResource === "Podcasts") {
      return(
        <div className="Resources">
          <div className="resources-container" id="resources">
            <p className="section-label">Resources</p>
            <h2 className="main-title">Here are the resources we've curated for you this week</h2>
            <div className="SectionToggleResources">
              <button className="section-toggle" value="Books" onClick={this.handleClick}>Books</button>
              <button className="section-toggle" value="Articles" onClick={this.handleClick}>Articles</button>
              <button className="section-toggle selected" value="Podcasts" onClick={this.handleClick}>Podcasts</button>
            </div>
            <Podcasts/>
          </div>
        </div>
      )
    }
  }
}

export default Resources;
