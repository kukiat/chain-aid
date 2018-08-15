import React from 'react'
import logo from './logo.jpg'
import '../../Styles/Nav.css'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <div className="nav-container">
          <div>
            <Link to="/">
              <img className="imgg" src = {logo} width="34" height="34"/>
            </Link>
          </div>
          <div className="navavav">
            <div className="nav-item">Chain-AID: The Electric Medical Record on Blockchain</div>
          </div>
        </div>
      </nav>
    )
  }
}