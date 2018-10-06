import React, { Component } from 'react';
import Home from './components/pages/Home/Home';
import Community from './components/pages/Community/Community';
import Work from './components/pages/Work/Work';
import Contact from './components/pages/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='uxsoc-website'>
        <Home/>
        <Community/>
        <Work/>
        <Contact/>
      </div>
    );
  }
}

export default App;
