import React, { Component } from 'react';
import './App.css';
// import Router from './components/router'
import Manage from './components/dashboard/Manage'

class App extends Component {
  render() {
    return (
      <div>
        <Manage/>
      </div>
    );
  }
}


export default App;
