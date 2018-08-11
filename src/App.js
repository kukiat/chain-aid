import React, { Component } from 'react';
import './App.css';
import Router from './components/router'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
        
    );
  }
}


export default App;
