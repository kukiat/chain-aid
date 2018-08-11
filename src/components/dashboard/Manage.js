import React from 'react';
import { Layout } from '../Layout';
import '../../Styles/Manage.css';

class Manage extends React.Component {
  constructor() {
    super();
    this.state = {
      lastModifile: '2018-11-8',
    };
  }
  render() {
    return (
      <div className="manage col-md-10">
        <div className="row">
          <div
            className="col-md-9 col-sm form"
            style={{height: '1000px' }}
          >
            <h3 className="inline">จัดการข้อมูลผู้ป่วย</h3>
            <span style={{ marginLeft: '15px' }}>
              แก้ไขครั้งล่าสุดเมื่อ {this.state.lastModifile}
            </span>
            <div style={{ width: '100%', padding: '10px 30px' }}>
              <div style={{ marginTop: '10px' }}>
                <h5 className="inline">หมายเลขประจำตัวผู้ป่วย</h5>
                <input type="text" className="input-200" />
              </div>
              <div style={{ marginTop: '10px' }}>
                <h5 className="inline">หมายเลขประจำตัวประชาชน</h5>
                <input type="text" className="input-200" />
              </div>
              <div style={{ marginTop: '10px' }}>
                <h5 className="inline">หมายเลขประจำตัวต่างด้าว</h5>
                <input type="text" className="input-200" />
              </div>
            </div>
            <div style={{ width: '100%', padding: '20px' }}>
              <h4>ข้อมูลส่วนตัว</h4>
              <hr />
              <div style={{ width: '100%', padding: '10px 30px' }}>
                <div>
                  <h5 className="inline">ชื่อ</h5>
                  <input type="text" className="input-150" />
                  <h5 className="inline" style={{marginLeft: '30px' }}>นามสกุล</h5>
                  <input type="text" className="input-150" />
                  <h5 className="inline" style={{ marginLeft: '30px' }}>ชื่อเล่น</h5>
                  <input type="text" className="input-100" />
                </div>
                <div style={{marginTop: '20px'}}>
                  <h5 className="inline">เพศ</h5>
                  <input type="text" className="input-150" />
                  <h5 className="inline" style={{ marginLeft: '30px' }}>วันเกิด</h5>
                  <input type="text" className="input-150" />
                  <h5 className="inline" style={{ marginLeft: '30px' }}>อายุ</h5>
                  <input type="text" className="input-50"/>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <h5 className="inline">ส่วนสูง</h5>
                  <input type="text" className="input-50" />
                  <h5 className="inline" style={{ marginLeft: '30px' }}>น้ำหนัก</h5>
                  <input type="text" className="input-50" />
                  <h5 className="inline" style={{ marginLeft: '30px' }}>หมู่เลือด</h5>
                  <input type="text" className="input-50" />
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <h5 className="inline" style={{ marginLeft: '30px' }}>สัญชาติ</h5>
                <input type="text" className="input-100" />
                <h5 className="inline" style={{ marginLeft: '30px' }}>เชื้อชาติ</h5>
                <input type="text" className="input-100" />
                <h5 className="inline" style={{ marginLeft: '30px' }}>ศาสนา</h5>
                <input type="text" className="input-100" />
              </div>
              <div style={{ marginTop: '20px' }}>
                <h5 className="inline" style={{ marginLeft: '30px' }}>โรคประจำตัว</h5>
                <input type="text" className="input-200" />
                <h5 className="inline" style={{ marginLeft: '30px' }}>ยาที่แพ้</h5>
                <input type="text" className="input-200" />
              </div>
              <div style={{ marginTop: '20px' }}>
                <h5 className="inline" style={{ marginLeft: '30px' }}>ผู้ติดต่อฉุกเฉิน</h5>
                <input type="text" className="input-200" />
              </div>
            </div>
            <div style={{ width: '100%', padding: '20px' }}>
              <h4>ข้อมูลติดต่อของผู้ป่วย</h4>
              <hr />
              <div style={{ marginLeft: '30px' }}>
                <div>
                  <h5>ที่อยู่ปัจจุบัน</h5>
                  <textarea cols="80" rows="4"></textarea>
                </div>
                <div style={{marginTop: '20px'}}>
                  <h5 className="inline">โทรศัพท์</h5>
                  <input type="text" className="input-200" />
                  <h5 className="inline" style={{ marginLeft: '30px' }}>อีเมล</h5>
                  <input type="text" className="input-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm" style={{ backgroundColor: 'blue' }}>
            รูป
          </div>
        </div>
      </div>
    );
  }
}

export default Layout(Manage);
