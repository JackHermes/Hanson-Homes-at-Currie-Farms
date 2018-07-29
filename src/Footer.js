import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import CFLogo from './images/currieFarmsLLC.PNG';
import WindLogo from './images/WindermereLogo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <Link to='/'><img className="logo" src={CFLogo} alt="Hanson Homes at Currie Farms LLC" /></Link>
        <a href="http://www.larsenhomesnw.com/"><img className="logo" src={WindLogo} alt="Windermere Real Estate" /></a>
      </footer>
    );
  }
}

export default Footer;