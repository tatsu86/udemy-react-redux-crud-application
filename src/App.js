import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I am Clicked!")}} />
      </React.Fragment>
    )
  }
}


export default App;
