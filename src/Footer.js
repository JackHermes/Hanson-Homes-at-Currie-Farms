import React, { Component } from 'react';
import './App.css';
import CFLogo from './images/currieFarmsLLC.jpg';
import WindLogo from './images/WindermereLogo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <img src={CFLogo} alt="Hanson Homes at Currie Farms LLC" />
        <img src={WindLogo} alt="Windermere Real Estate" />
      </footer>
    );
  }
}

export default Footer;