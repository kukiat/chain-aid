import React from 'react'
import logo from './logo.jpg'
import '../../Styles/Nav.css'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/">
            <img className="nav-item imgg" src = {logo} width="34" height="34"/>
          </Link>
          <div className="navavav">
            <div className="nav-item">Chain-AID: The Electric Medical Record on Blockchain</div>
          </div>
        </div>
      </nav>
    )
  }
}