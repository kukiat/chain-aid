import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="/">
          <div>HomeButton</div>
        </Link>
        <Link to="/manage">
          <div>ManageButton</div>
        </Link>
      </div>
    )
  }
}