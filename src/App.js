import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import DesignLibraryArticles from './components/pages/DesignLibrary/Articles/Articles'
import DesignLibraryPodcasts from './components/pages/DesignLibrary/Podcasts/Podcasts'
import About from './components/pages/About/About';
import Community from './components/pages/Community/Community';
import Work from './components/pages/Work/Work';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="uxsoc-website">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/community" component={Community} />
          <Route path="/work" component={Work} />
        </Switch>
      </div>
    );
  }
}


export default App;
