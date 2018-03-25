import React, { Component } from 'react';
import Logo from './Logo.js';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <h1 className="App-title">Welcome Home.</h1>
      </header>
    );
  }
}

export default Header;