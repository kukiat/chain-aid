import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/navigation.css'

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation col-md-2">
        <Link className="wrap-btn" to="/manage">
          <div className="navigation-btn">
            <p>จัดการข้อมูลผู้ป่วย</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn">
            <p>สิทธิการรักษา</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn">
            <p>ประวัติการรักษา</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn">
            <p>ประวัติการจ่ายยา</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn">
            <p>ครอบครัว</p>
          </div>
        </Link>
        <Link className="wrap-btn" to="/">
          <div className="navigation-btn">
            <p>จัดการข้อมูลผู้ป่วย</p>
          </div>
        </Link>
      </div>
    );
  }
}
