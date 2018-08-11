import React from 'react'
import logo from './logo.jpg'
import '../../Styles/Nav.css'

export default class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <div className="nav-container">
          <img src = {logo} />
          <h4>Chain-AID: The Electric Medical Record on Blockchain</h4>
        </div>
      </nav>
    )
  }
}