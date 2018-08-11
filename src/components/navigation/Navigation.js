import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return(
      <div className="wdwadwa">
        <Link to="/">
          <div style={{border: '1px solid #FFF', width: '50px'}}>Home</div>
        </Link>
        <Link to="/manage">
          <div style={{border: '1px solid #FFF', width: '50px'}}>Manage</div>
        </Link>
      </div>
    )
  }
}