import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Agents from './Agents.js';
import './App.css';
import drawnHome from './images/sketchedHome.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <h2>Site currently under construction. Please check back later!</h2>
          <img className="App-img" src={drawnHome} alt="Drawn home" />
          <Agents />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
