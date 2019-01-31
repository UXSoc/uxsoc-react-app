import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Community from './components/pages/Community/Community';
import MemberStory from './components/pages/MemberStory/MemberStory';
import Work from './components/pages/Work/Work';
import DesignLibraryArticles from './components/pages/DesignLibrary/Articles/Articles'
import DesignLibraryPodcasts from './components/pages/DesignLibrary/Podcasts/Podcasts'

import './App.css';

class App extends Component {
  render() {
    
    function initializeReactGA() {
      ReactGA.initialize('UA-133553597-1');
      ReactGA.pageview('/');
      ReactGA.pageview('/about');
      ReactGA.pageview('/community');
      ReactGA.pageview('/work');
  }

    return (
      <div className="uxsoc-website">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/community" component={Community}/>
            <Route exact path="/work" component={Work} />
            <Route path="/member-story" component={MemberStory} />
            <Route exact path="/design-library-articles" component={DesignLibraryArticles} />
            <Route path="/design-library-podcasts" component={DesignLibraryPodcasts} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
