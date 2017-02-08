import React, { Component } from 'react';
import './App.css';
import './bulma.css';
import logo from './images/logo.png';
import {Box} from './Box.js';

class App extends Component {

  render() {

    return (

      <div className="hero-body">
          
          <p className="control is-primary">
          <div className="column">
            <center>
            Select Box Number
              <Box/>
            </center>
          </div>
          </p>

      </div>

  
    );
  }
}

export default App;