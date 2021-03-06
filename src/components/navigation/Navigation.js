import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../Styles/navigation.css'

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation col-md-2">
        <NavLink activeClassName="wrap-btn-active" className="wrap-btn" to="/manage">
          <div className="navigation-btn left">
            <p>จัดการข้อมูลผู้ป่วย</p>
          </div>
        </NavLink>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn left">
            <p>สิทธิการรักษา</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn left">
            <p>ประวัติการรักษา</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn left">
            <p>ประวัติการจ่ายยา</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn left">
            <p>ครอบครัว</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn left">
            <p>จัดการข้อมูลผู้ป่วย</p>
          </div>
        </Link>
      </div>
    )
  }
}
