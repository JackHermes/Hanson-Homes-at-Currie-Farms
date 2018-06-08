import React, { Component } from 'react';
import './Footer.css';
import CFLogo from './images/currieFarmsLLC.PNG';
import WindLogo from './images/WindermereLogo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <img className="logo" src={CFLogo} alt="Hanson Homes at Currie Farms LLC" />
        <img className="logo" src={WindLogo} alt="Windermere Real Estate" />
      </footer>
    );
  }
}

export default Footer;