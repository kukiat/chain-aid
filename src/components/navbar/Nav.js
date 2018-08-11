import React from 'react'
import logo from './logo.jpg'
import '../../Styles/Nav.css'
export default class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand navbar-light bg-light">
        <img src = {logo} />
      </nav>
    )
  }
}