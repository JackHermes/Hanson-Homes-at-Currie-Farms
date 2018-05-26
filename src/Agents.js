import React, { Component } from 'react';

class Agents extends Component {
  render() {
    return (
      <div className="contacts">
        <div className="child1">
          <h3>Listing Agent:</h3>
          <div>Steve Larsen</div>
          <div>(206)799-6300</div>
          <div><a href="mailto:slarsen@windermere.com">slarsen@windermere.com</a></div>
        </div>

        <div className="child2">
          <h3>Buyer's Agents:</h3>
          <div>Shirley Hudson</div>
          <div>(425)923-4593</div>
          <div><a href="mailto:shirleyhudson@windermere.com">shirleyhudson@windermere.com</a></div>
          <br/>
          <div>Marlene Rouleau</div>
          <div>(425)409-6041</div>
          <div><a href="mailto:marlener@windermere.com">marlener@windermere.com</a></div>
        </div>
      </div>
    )
  }
}

export default Agents;