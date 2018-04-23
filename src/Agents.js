import React, { Component } from 'react';

class Agents extends Component {
  render() {
    return (
      <div>
        <div className="contacts">
          <h3>Listing Agent:</h3>
          <div>Steve Larsen</div>
          <div>(206)799-6300</div>
          <div>slarsen@windermere.com</div>
        </div>
        <br/>
        <div>
          <h3>Buyer's Agents:</h3>
          <div>Shirley Hudson</div>
          <div>(425)923-4593</div>
          <div>shirleyhudson@windermere.com</div>
          <br/>
          <div>Marlene Rouleau</div>
          <div>(425)409-6041</div>
          <div>marlener@windermere.com</div>
        </div>
      </div>
    )
  }
}

export default Agents;