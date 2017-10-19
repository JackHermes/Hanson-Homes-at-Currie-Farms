import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import './App.css';
import drawnHome from './images/drawnHome.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Homes are here. Like this one:
        </p>
        <img src={drawnHome} alt="Drawn image of a home" />
        <Footer />
      </div>
    );
  }
}

export default App;
