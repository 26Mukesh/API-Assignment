import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import Apicall from './Apicall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Apicall />
        </div>
      </div>
    );
  }
}

//connect react-redux
export default connect()(App);

