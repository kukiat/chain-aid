import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation btn-group-vertical col-md-2" style={{backgroundColor:'yellow'}}>
        <Link to="/">
          <div>ManageButton</div>
        </Link>
        <Link to="/manage">
          <div>ManageButton</div>
        </Link>
      </div>
    );
  }
}
