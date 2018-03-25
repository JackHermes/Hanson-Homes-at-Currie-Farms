import React, { Component } from 'react';
import './App.css';
import LLCLogo from './images/currieFarmsLLC.jpg';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <img src={LLCLogo} alt="Hanson Homes at Currie Farms LLC" />
      </footer>
    );
  }
}

export default Footer;