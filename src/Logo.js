import React, { Component } from 'react';
import CFLogo from './images/currieFarmsLogo.jpg'

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={CFLogo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Logo;