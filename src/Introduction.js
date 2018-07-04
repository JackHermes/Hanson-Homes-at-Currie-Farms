import React, { Component } from 'react';
import displayHome from './images/displayHome.jpg';
import './Introduction.css';

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {display: props};
  }

  render() {
    // let d;
    // if(this.state.display === "split") {
      // d = <div className="intro-wrapper">
      //   <div>Welcome to the Currie Farms website! Here's where we get to show off a little and offer you a window into the homes we're creating.</div>
      //   <img className="photo" src={displayHome} alt="a home" />
      //   <div>You'll find model layouts to base your home on as well as photos of some of the houses we've finished and contact deets to get more information and set up a tour of what we've done so far. We're proud of our work and look forward to meeting you and welcoming you to your new home.</div>
      // </div>;
    // } else {
    //   d = <div className="intro-wrapper">
    //     <div>Welcome to the Currie Farms website! Here's where we get to show off a little and offer you a window into the homes we're creating. You'll find model layouts to base your home on as well as photos of some of the houses we've finished and contact deets to get more information and set up a tour of what we've done so far. We're proud of our work and look forward to meeting you and welcoming you to your new home.</div>
    //     <img className="photo" src={displayHome} alt="a home" />
    //   </div>;
    // }

  return(
    <div>Hey {this.state}</div>
    )
  }
}

export default Introduction;