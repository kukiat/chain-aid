import React, { Component } from 'react';
import './App.css';
import Router from './components/router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Nav from './components/navbar/Nav'
import Manage from './components/dashboard/Manage'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Navigation/>
        <Manage/>
        {/* <Router/> */}
      </div>
    );
  }
}


export default App;
