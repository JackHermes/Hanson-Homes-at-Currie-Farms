import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import './App.css';
import drawnHome from './images/sketchedHome.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Homes are here. Like this one:
        </p>
        <div className="App-body">
          <img src={drawnHome} alt="Drawn home" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
