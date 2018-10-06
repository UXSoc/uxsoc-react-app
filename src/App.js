import React, { Component } from 'react';
import Navigation from './components/stateless/Navigation/Navigation';
import CommunityConsultancy from './components/pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <CommunityConsultancy/>
      </div>
    );
  }
}

export default App;
