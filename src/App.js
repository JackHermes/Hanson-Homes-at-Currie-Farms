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

        </p>
        <div className="App-body">
          <h2>Site currently under construction. Please check back later!</h2>
          <img src={drawnHome} alt="Drawn home" />
          <div className="contacts">
            <h3>Listing Agent:</h3>
            <div>Steve Larsen</div>
            <div>(206)799-6300</div>
            <div>slarsen@windermere.com</div>
          </div>
          <br/>
          <div>
            <h3>Buyer's Agents:</h3>
            <div>Shirley Hudson</div>
            <div>(425)923-4593</div>
            <div>shirleyhudson@windermere.com</div>
            <br/>
            <div>Marlene Rouleau</div>
            <div>(425)409-6041</div>
            <div>marlener@windermere.com</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
