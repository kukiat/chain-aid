import React from 'react';
import { Layout } from '../Layout';
import { Loading } from './Loading'
import '../../Styles/Manage.css';
import axios from 'axios'

class Manage extends React.Component {
  constructor() {
    super();
    this.state = {
      lastModifile: '2018-11-8',
      data: [],
      isLoading: true
    };
  }

  componentDidMount(){
    const url = 'https://chain-aid-api.herokuapp.com/api/manage/?cardId=5704062616544'
    axios.get(url)
      .then(({ data }) => {
        console.log(data)
        const { results } = data
        this.setState({ 
          data: results,
          isLoading: false
        })
      })
      .catch(err => console.log(err))
  }

  handleManageId = (e) => {
    const { data } = this.state
    this.setState({
      data: Object.assign(data, { manageId: Object.assign(data.manageId, { [e.target.name]: e.target.value })})
    })
  }

  handlePersonalInfo = (e) => {
    const { data } = this.state
    this.setState({
      data: Object.assign(data, { personalInfo: Object.assign(data.personalInfo, { [e.target.name]: e.target.value })})
    })
  }

  handlePatientInformation = (e) => {
    const { data } = this.state
    this.setState({
      data: Object.assign(data, { patientInformation: Object.assign(data.patientInformation, { [e.target.name]: e.target.value })})
    })
  }
  
  onSubmitForm = () => {
    const { id, manageId, patientInformation, personalInfo, createdAt } = this.state.data
    const body = {
      "patientId": manageId.patientId,
      "cardId": manageId.cardId,
      "alienId": manageId.alienId,
      "name": personalInfo.name,
      "surname": personalInfo.surname,
      "nickname": personalInfo.nickname,
      "gender": personalInfo.gender,
      "birthday": personalInfo.birthday,
      "height": personalInfo.nickname,
      "weight": personalInfo.weight,
      "bloodType": personalInfo.bloodType,
      "nation": personalInfo.nation,
      "race": personalInfo.race,
      "religion": personalInfo.religion,
      "congenital": personalInfo.congenital,
      "allergyDrug": personalInfo.allergyDrug,
      "contact": personalInfo.contact,
      "address": patientInformation.address,
      "tel": patientInformation.tel,
      "email": patientInformation.email,
      "updatedAt": `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`,
      "createdAt": createdAt
    }
    const url = `https://chain-aid-api.herokuapp.com/api/manage/${id}`
    axios.patch(url, body)
      .then(res => console.log(res.data.message))
      .catch(err => console.log(err))
  }

  render() {
    const { data, isLoading } = this.state
    console.log(data)
    return (
      <div className="mgl-auto col-md-10">
          <div className="row mg0">
            { isLoading ? <Loading/> :
              <div className="col-md-11 col-sm form" style={{height: '1000px' }}>
                <div>
                  <h3 className="inline">จัดการข้อมูลผู้ป่วย</h3>
                  <span style={{ marginLeft: '15px' }}>
                    แก้ไขครั้งล่าสุดเมื่อ {this.state.lastModifile}
                  </span>
                </div>
                <div style={{ padding: '10px 30px' }} className="inline">
                  <div style={{ marginTop: '10px' }}>
                    <h5 className="inline">หมายเลขประจำตัวผู้ป่วย</h5>
                    <input 
                      type="text" 
                      onChange={this.handleManageId} 
                      className="input-200" 
                      value={data.manageId.patientId}
                      name="patientId"
                    />
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <h5 className="inline">หมายเลขประจำตัวประชาชน</h5>
                    <input 
                      type="text" 
                      onChange={this.handleManageId} 
                      className="input-200" 
                      value={data.manageId.cardId}
                      name="cardId"
                    />
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <h5 className="inline">หมายเลขประจำตัวต่างด้าว</h5>
                    <input 
                      type="text" 
                      onChange={this.handleManageId} 
                      className="input-200" 
                      value={data.manageId.alienId}
                      name="alienId"
                    />
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
                        <input 
                          type="text" 
                          className="input-150" 
                          value={data.personalInfo.name}
                          onChange={this.handlePersonalInfo}
                          name="name"
                        />
                      </div>
                      <div className="col">
                        <h5 className="inline" style={{marginLeft: '30px' }}>นามสกุล</h5>
                        <input 
                          type="text" 
                          className="input-150" 
                          value={data.personalInfo.surname}
                          onChange={this.handlePersonalInfo}
                          name="surname"
                        />
                      </div>
                      <div className="col">
                        <h5 className="inline" style={{ marginLeft: '30px' }}>ชื่อเล่น</h5>
                        <input 
                          type="text" 
                          className="input-100" 
                          value={data.personalInfo.nickname}
                          onChange={this.handlePersonalInfo}
                          name="nickname"
                        />
                      </div>
                    </div>
                    <div style={{marginTop: '20px'}} className="row">
                      <div className="col">
                        <h5 className="inline">เพศ</h5>
                        <input 
                          type="text" 
                          className="input-150" 
                          value={data.personalInfo.gender}
                          onChange={this.handlePersonalInfo}
                          name="gender"
                        />
                      </div>
                      <div className="col">
                        <h5 className="inline" style={{ marginLeft: '30px' }}>วันเกิด</h5>
                        <input 
                          type="text" 
                          className="input-150" 
                          value={data.personalInfo.birthday}
                          onChange={this.handlePersonalInfo}
                          name="birthday"
                        />
                      </div>
                      <div className="col">
                        <h5 className="inline" style={{ marginLeft: '30px' }}>อายุ</h5>
                        <input 
                          type="text" 
                          className="input-50" 
                          // value={data.personalInfo.age}
                          // onChange={this.handlePersonalInfo}
                          name="age"
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }} className="row">
                    <div className="col">
                      <h5 className="inline">ส่วนสูง</h5>
                      <input 
                        type="text" 
                        className="input-50" 
                        value={data.personalInfo.height}
                        onChange={this.handlePersonalInfo}
                        name="height"
                      />
                    </div>
                    <div className="col">
                      <h5 className="inline" style={{ marginLeft: '30px' }}>น้ำหนัก</h5>
                      <input 
                        type="text" 
                        className="input-50" 
                        value={data.personalInfo.weight}
                        onChange={this.handlePersonalInfo}
                        name="weight"
                      />
                    </div>
                    <div className="col">
                      <h5 className="inline" style={{ marginLeft: '30px' }}>หมู่เลือด</h5>
                      <input 
                        type="text" 
                        className="input-50" 
                        value={data.personalInfo.bloodType}
                        onChange={this.handlePersonalInfo}
                        name="bloodType"
                      />
                    </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }} className="row">
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>สัญชาติ</h5>
                    <input 
                      type="text" 
                      className="input-100" 
                      value={data.personalInfo.nation}
                      onChange={this.handlePersonalInfo}
                      name="nation"
                    />
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>เชื้อชาติ</h5>
                    <input 
                      type="text" 
                      className="input-100" 
                      value={data.personalInfo.race}
                      onChange={this.handlePersonalInfo}
                      name="race"
                    />
                  </div>
                  <div className="col">
                    <h5 className="inline" style={{ marginLeft: '30px' }}>ศาสนา</h5>
                    <input 
                      type="text" 
                      className="input-100" 
                      value={data.personalInfo.religion}
                      onChange={this.handlePersonalInfo}
                      name="religion"
                    />
                  </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <h5 className="inline" style={{ marginLeft: '30px' }}>โรคประจำตัว</h5>
                    <input 
                      type="text" 
                      className="input-200" 
                      value={data.personalInfo.congenital}
                      onChange={this.handlePersonalInfo}
                      name="congenital"
                    />
                    <h5 className="inline" style={{ marginLeft: '30px' }}>ยาที่แพ้</h5>
                    <input 
                      type="text" 
                      className="input-200" 
                      value={data.personalInfo.allergyDrug}
                      onChange={this.handlePersonalInfo}
                      name="allergyDrug"
                    />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <h5 className="inline" style={{ marginLeft: '30px' }}>ผู้ติดต่อฉุกเฉิน</h5>
                    <input 
                      type="text" 
                      className="input-200" 
                      value={data.personalInfo.contact}
                      onChange={this.handlePersonalInfo}
                      name="contact"
                    />
                  </div>
                </div>
                <div style={{ width: '100%', padding: '20px' }}>
                  <h4>ข้อมูลติดต่อของผู้ป่วย</h4>
                  <hr />
                  <div style={{ marginLeft: '30px' }}>
                    <div>
                      <h5>ที่อยู่ปัจจุบัน</h5>
                      <textarea 
                        cols="80" 
                        rows="4" 
                        onChange={this.handlePatientInformation} 
                        name="address"
                        value={data.patientInformation.address}
                      >
                        {data.patientInformation.address}
                      </textarea>
                    </div>
                    <div style={{marginTop: '20px'}}>
                      <h5 className="inline">โทรศัพท์</h5>
                      <input 
                        type="text" 
                        className="input-200" 
                        value={data.patientInformation.tel}
                        onChange={this.handlePatientInformation} 
                        name="tel"
                      />
                      <h5 className="inline" style={{ marginLeft: '30px' }}>อีเมล</h5>
                      <input 
                        type="text" 
                        className="input-200" 
                        value={data.patientInformation.email}
                        onChange={this.handlePatientInformation} 
                        name="email"
                      />
                      <button onClick={ this.onSubmitForm}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            }
            </div>
        </div>
    );
  }
}

export default Layout(Manage);
