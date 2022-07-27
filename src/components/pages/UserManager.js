import React, { Component } from 'react';
import axios from "axios";
import swal from "sweetalert";

class userManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rolesData: [],
      viewLocationData: [],
      lobData: [],
      langData: []
    };
    this.locationData();
    this.rolesData();
    this.getLobData();
    this.getLanguageData();

  }

  rolesData() {
    axios.get('http://localhost:4000/api/v2/role/roleview').then(response => {
      console.log(response.data);
      this.setState({
        rolesData: response.data.result
      });

    });
  }

  locationData = () => {
    axios.get('http://localhost:4000/api/v3/location/viewLocation')
    .then(response => {
      console.log(response.data);
      this.setState({
        viewLocationData:response.data.result
      });

    });
  }

  getLobData = () => {
    axios.get('http://localhost:4000/api/v4/lob/viewLob')
    .then(response => {
      console.log(response.data);
      this.setState({
        lobData:response.data.result
      });

    });
  }



  getLanguageData = () => {
    axios.get('http://localhost:4000/api/v5/language/viewLanguage')
    .then(response => {
      console.log(response.data);
      this.setState({
        langData: response.data.result
      });

    });
  }

    UserSave() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const role = document.getElementById('roles').value;
    const location = document.getElementById('location').value;
    const business = document.getElementById('lob').value;
    const language = document.getElementById('language').value;
   

    console.log("username...",username);
    if(username=="" || email=="" || password=="" || address=="" ||role=="" ||location==""||business=="" ||language==""){
      swal({
        title: "Please Fill the All fields",
        icon: "error",
        buttons: {
          confirm: true,
        },
      });
    }else{
    const addData={
      username:username,
      email:email,
      password:password,
      address:address,
      role:role,
      location:location,
      lob:business,
      language:language,
     
  }
  axios.post('http://localhost:4000/api/v6/userManage/createUser', addData)
  .then((response) => {
      console.log("Response...", response);
      if (response.status === 200) {
        swal({
          title: "User Created Successfully",
          icon: "success",
        });
      } 
  });
}
  }



  render() {
    const { rolesData } = this.state;

    let rolesDataList = rolesData.length > 0
      && rolesData.map((item, i) => {
        return (
          <option key={i} value={item.rolename}>{item.rolename}</option>
        )
      }, this);
    const { viewLocationData } = this.state;

    let locationDataList = viewLocationData.length > 0
      && viewLocationData.map((item, i) => {
        return (
          <option key={i} value={item.locationName}>{item.locationName}</option>
        )
      }, this);

    const { lobData } = this.state;

    let lobDataList = lobData.length > 0
      && lobData.map((item, i) => {
        return (
          <option key={i} value={item.lobName}>{item.lobName}</option>
        )
      }, this);
    const { langData } = this.state;

    let langDataList = langData.length > 0
      && langData.map((item, i) => {
        return (
          <option key={i} value={item.languageName}>{item.languageName}</option>
        )
      }, this);
    return (
      <>
        <div className="container card p-5" id="cardh">

          <div class="row">
            <div class="col-sm-3">
              <div><label>UserName <span id="star">*</span></label></div>
              <input type="text" class="form-control" id="username" name="username" />
            </div>

            <div class="col-sm-3">
              <div><label>User Email Id<span id="star">*</span></label></div>
              <input type="text" class="form-control" id="email" name="email" />
            </div>

            <div class="col-sm-3">
              <div><label>User Password<span id="star">*</span></label></div>
              <input type="text" class="form-control" id="password" name="password" />
            </div>

            <div class="col-sm-3">
              <div><label>User Address<span id="star">*</span></label></div>
              <input type="text" class="form-control" id="address" name="address" />
            </div>

          </div>
          <div class="row" id="top">
            <div class="col-sm-3">
              <div><label>Roles<span id="star">*</span></label>
              </div>
              <select class="form-control" id="roles">
                <option>SELECT</option>
                {rolesDataList}
              </select>
            </div>
            <div class="col-sm-3">
              <div><label>Location<span id="star">*</span></label></div>
              <select class="form-control" id="location">
                <option>SELECT</option>
                {locationDataList}
              </select>
            </div>
            <div class="col-sm-3">
              <div><label>Line Of Bussiness<span id="star">*</span></label></div>

              <select class="form-control" id="lob">
                <option>SELECT</option>

                {lobDataList}
              </select>
            </div>
            <div class="col-sm-3">
              <div><label>Language<span id="star">*</span></label></div>
              <select class="form-control" id="language">
                <option>SELECT</option>
                {langDataList}
              </select>
            </div>
      
          </div>
          <div>
            <button  onClick={this.UserSave} class="btn btn-primary btn-block col-sm-4 " id="save" >SUBMIT</button>

          </div>
        </div>



      </>


    );
  }




}

export default userManager;
