import React, { Component } from 'react';
import displayHome from './images/displayHome.jpg';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {display: props};
  }

  render() {
  return(
    <div className="intro-wrapper">
      <h3>Welcome to the Currie Farms website! Here's where we get to show off a little and offer you a window into the homes we're creating.</h3>
      <img className="photo" src={displayHome} alt="a home" />
      <div>Here you'll find model layouts to base your home on as well as photos of some of the houses we've finished and contact deets to get more information and set up a tour of what we've done so far. We're proud of our work and look forward to meeting you and welcoming you to your new home.</div>
    </div>
    )
  }
}

export default Home;