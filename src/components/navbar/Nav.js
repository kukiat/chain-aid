import React from 'react'
import logo from './logo.jpg'
import '../../Styles/Nav.css'

export default class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <div className="nav-container">
          <img className="nav-item imgg" src = {logo} width="34" height="34"/>
          <h4 className="nav-item">Chain-AID: The Electric Medical Record on Blockchain</h4>
        </div>
      </nav>
    )
  }
}