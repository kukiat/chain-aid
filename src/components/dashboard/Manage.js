import React from 'react';
import { Layout } from '../Layout';
import '../../Styles/Manage.css';

class Manage extends React.Component {
  constructor() {
    super();
    this.state = {
      lastModifile: '2018-11-8',
      data: []
    };
  }
  componentDidMount(){
    fetch('https://chain-aid-api.herokuapp.com/api/manage/?cardid=5704062616518').
    then(response => response.json()).
    then(result => {
      this.setState({ data: result.results[0]})})
  }
  show(value, value2){
    if (this.state.data[value2] != undefined){
      return  this.state.data[value2][value]
    }
    return ""
  }
  age(birthday){
      let textArr = birthday.split('-')
      let dob = new Date(textArr[2]-543, textArr[1], textArr[0])
      let diff_ms = Date.now() - dob.getTime();
      let age_dt = new Date(diff_ms); 
      return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  render() {
    return (
      <div className="manage col-md-10">
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
                <input type="text" className="input-200" value={this.show("patientId","manageId")}/>
              </div>
              <div style={{ marginTop: '10px' }}>
                <h5 className="inline">หมายเลขประจำตัวประชาชน</h5>
                <input type="text" className="input-200" value={this.show("cardId","manageId")}/>
              </div>
              <div style={{ marginTop: '10px' }}>
                <h5 className="inline">หมายเลขประจำตัวต่างด้าว</h5>
                <input type="text" className="input-200" value={this.show("alienId","manageId")}/>
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
                    <input type="text" className="input-150" value={this.show("name","personalInfo")}/>
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{marginLeft: '30px' }}>นามสกุล</h5>
                    <input type="text" className="input-150" value={this.show("surname","personalInfo")}/>
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>ชื่อเล่น</h5>
                    <input type="text" className="input-100" value={this.show("nickname","personalInfo")}/>
                  </div>
                </div>
                <div style={{marginTop: '20px'}} className="row">
                  <div className="col">
                    <h5 className="inline">เพศ</h5>
                    <input type="text" className="input-150" value={this.show("gender","personalInfo")}/>
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>วันเกิด</h5>
                    <input type="text" className="input-150" value={this.show("birthday","personalInfo")}/>
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>อายุ</h5>
                    <input type="text" className="input-50" value={this.age(this.show("birthday","personalInfo"))}/>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }} className="row">
                <div className="col">
                  <h5 className="inline">ส่วนสูง</h5>
                  <input type="text" className="input-50" value={this.show("height","personalInfo")}/>
                </div>
                <div className="col">
                  <h5 className="inline" style={{ marginLeft: '30px' }}>น้ำหนัก</h5>
                  <input type="text" className="input-50" value={this.show("weight","personalInfo")}/>
                </div>
                <div className="col">
                  <h5 className="inline" style={{ marginLeft: '30px' }}>หมู่เลือด</h5>
                  <input type="text" className="input-50" value={this.show("bloodType","personalInfo")}/>
                </div>
                </div>
              </div>
              <div style={{ marginTop: '20px' }} className="row">
              <div className="col">
                <h5 className="inline" style={{ marginLeft: '30px' }}>สัญชาติ</h5>
                <input type="text" className="input-100" value={this.show("nation","personalInfo")}/>
              </div>
              <div className="col">
                <h5 className="inline" style={{ marginLeft: '30px' }}>เชื้อชาติ</h5>
                <input type="text" className="input-100" value={this.show("race","personalInfo")}/>
              </div>
              <div className="col">
                <h5 className="inline" style={{ marginLeft: '30px' }}>ศาสนา</h5>
                <input type="text" className="input-100" value={this.show("religion","personalInfo")}/>
              </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <h5 className="inline" style={{ marginLeft: '30px' }}>โรคประจำตัว</h5>
                <input type="text" className="input-200" value={this.show("congenital","personalInfo")}/>
                <h5 className="inline" style={{ marginLeft: '30px' }}>ยาที่แพ้</h5>
                <input type="text" className="input-200" value={this.show("allergyDrug","personalInfo")}/>
              </div>
              <div style={{ marginTop: '20px' }}>
                <h5 className="inline" style={{ marginLeft: '30px' }}>ผู้ติดต่อฉุกเฉิน</h5>
                <input type="text" className="input-200" value={this.show("contact","personalInfo")}/>
              </div>
            </div>
            <div style={{ width: '100%', padding: '20px' }}>
              <h4>ข้อมูลติดต่อของผู้ป่วย</h4>
              <hr />
              <div style={{ marginLeft: '30px' }}>
                <div>
                  <h5>ที่อยู่ปัจจุบัน</h5>
                  <textarea cols="80" rows="4" value={this.show("address","patientInformation")}></textarea>
                </div>
                <div style={{marginTop: '20px'}}>
                  <h5 className="inline">โทรศัพท์</h5>
                  <input type="text" className="input-200" value={this.show("tel","patientInformation")}/>
                  <h5 className="inline" style={{ marginLeft: '30px' }}>อีเมล</h5>
                  <input type="text" className="input-200" value={this.show("email","patientInformation")}/>
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
