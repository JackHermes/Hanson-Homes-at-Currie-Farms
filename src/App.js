import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
// import Introduction from './Introduction.js';
import Agents from './Agents.js';
import displayHome from './images/displayHome.jpg';
import './App.css';

class App extends Component {

resize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <div className="intro-wrapper">
            <h3>Welcome to the Currie Farms website! Here's where we get to show off a little and offer you a window into the homes we're creating.</h3>
            <img className="photo" src={displayHome} alt="a home" />
            <div>You'll find model layouts to base your home on as well as photos of some of the houses we've finished and contact deets to get more information and set up a tour of what we've done so far. We're proud of our work and look forward to meeting you and welcoming you to your new home.</div>
          </div>
          {/*
            <Location />
            <ModelHomes />
          */}
          <Agents />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
