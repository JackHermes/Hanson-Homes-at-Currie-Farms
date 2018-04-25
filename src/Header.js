import React, { Component } from 'react';
import './Header.css';
import CFLogo from './images/currieFarmsLogo.jpg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={CFLogo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome Home.</h1>
      </header>
    );
  }
}

export default Header;