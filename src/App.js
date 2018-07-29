import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Agents from './Agents.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Home from './Home.js';
import Lot8 from './Lot8.js';
import Lot9 from './Lot9.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App-body">
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/lot8">Lot 8</Link>
            <span> | </span>
            <Link to="/lot9">Lot 9</Link>
            <span> | </span>
            <Link to="/contact">Contact</Link>
            <Route exact path="/" component={Home} />
            <Route path="/lot8" component={Lot8} />
            <Route path="/lot9" component={Lot9} />
            <Route path="/contact" component={Agents} />

          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
