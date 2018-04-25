import React, { Component } from 'react';
import './Footer.css';
import CFLogo from './images/currieFarmsLLC.jpg';
import WindLogo from './images/WindermereLogo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <img className="Footer-image" src={CFLogo} alt="Hanson Homes at Currie Farms LLC" />
        <img className="Footer-image" src={WindLogo} alt="Windermere Real Estate" />
      </footer>
    );
  }
}

export default Footer;