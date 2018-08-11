import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return(
      <div className="btn-group-vertical">
        <Link to="/">
        <div>ManageButton</div>
        </Link>
        <Link to="/manage">
          <div>ManageButton</div>
        </Link>
      </div>
    )
  }
}