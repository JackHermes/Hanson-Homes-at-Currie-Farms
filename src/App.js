import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Agents from './Agents.js';
import './App.css';
import displayHome from './images/displayHome.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <h3 className="intro">We're currently both building homes and this website, so check back as we add more content! <br /><br /> In the meantime head over to <a href="http://www.larsenhomesnw.com">this link</a> or contact the realtors below for more information.</h3>
          <img className="photo" src={displayHome} alt="a home" />
          <Agents />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
