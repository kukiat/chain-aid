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
      <div className="mgl-auto col-md-10">
        <div className="row mg0">
          <div
            className="col-md-11 col-sm form"
            style={{height: '1000px' }}
          >
            <div>
              <h3 className="inline">จัดการข้อมูลผู้ป่วย</h3>
              <span style={{ marginLeft: '15px' }}>
                แก้ไขครั้งล่าสุดเมื่อ {this.state.lastModifile}
              </span>
            </div>
            <div style={{ padding: '10px 30px' }} className="inline">
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
            <div className="inline" style={{marginLeft: '20vw'}}>
              <div style={{ height: '120px', width: '120px', backgroundColor: 'red', borderRadius: '50%' }}></div>
            </div>
            <div style={{ width: '100%', padding: '20px' }}>
              <h4>ข้อมูลส่วนตัว</h4>
              <hr />
              <div style={{ width: '100%', padding: '10px 30px' }}>
                <div className="row">
                  <div className="col">
                    <h5 className="inline">ชื่อ</h5>
                    <input type="text" className="input-150" />
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{marginLeft: '30px' }}>นามสกุล</h5>
                    <input type="text" className="input-150" />
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>ชื่อเล่น</h5>
                    <input type="text" className="input-100" />
                  </div>
                </div>
                <div style={{marginTop: '20px'}} className="row">
                  <div className="col">
                    <h5 className="inline">เพศ</h5>
                    <input type="text" className="input-150" />
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>วันเกิด</h5>
                    <input type="text" className="input-150" />
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>อายุ</h5>
                    <input type="text" className="input-50"/>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }} className="row">
                <div className="col">
                  <h5 className="inline">ส่วนสูง</h5>
                  <input type="text" className="input-50" />
                </div>
                <div className="col">
                  <h5 className="inline" style={{ marginLeft: '30px' }}>น้ำหนัก</h5>
                  <input type="text" className="input-50" />
                </div>
                <div className="col">
                  <h5 className="inline" style={{ marginLeft: '30px' }}>หมู่เลือด</h5>
                  <input type="text" className="input-50" />
                </div>
                </div>
              </div>
              <div style={{ marginTop: '20px' }} className="row">
              <div className="col">
                <h5 className="inline" style={{ marginLeft: '30px' }}>สัญชาติ</h5>
                <input type="text" className="input-100" />
              </div>
              <div className="col">
                <h5 className="inline" style={{ marginLeft: '30px' }}>เชื้อชาติ</h5>
                <input type="text" className="input-100" />
              </div>
              <div className="col">
                <h5 className="inline" style={{ marginLeft: '30px' }}>ศาสนา</h5>
                <input type="text" className="input-100" />
              </div>
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
        </div>
      </div>
    );
  }
}

export default Layout(Manage);
