import React, { Component } from 'react';
import './Header.css';
import CFLogo from './images/currieFarmsLogo.PNG';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h2 className="App-title">Welcome to Currie Farms.</h2>
        <img src={CFLogo} className="logo" alt="logo" />
      </header>
    );
  }
}

export default Header;