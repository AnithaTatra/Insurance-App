import React, { Component } from 'react';
import axios from "axios";
import swal from "sweetalert";

class TaskAllocation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskData: [],
      viewLocationData: [],
      lobData: [],
      allocateUser: []
    };
    this.locationData();
    this.rolesData();
    this.getLobData();

  }

  rolesData() {
    axios.get('http://localhost:4000/api/v7/policy/getPolicyInfoDetails').then(response => {
      console.log(response.data);
      this.setState({
        taskData: response.data.result,
        allocateUser: response.data.result


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



  

    UserSave() {
    const taskid = document.getElementById('taskid').value;
    const location = document.getElementById('location').value;
    const business = document.getElementById('lob').value;
    const allocateduser = document.getElementById('allocateduser').value;
   

    if(taskid=="" || taskid=="SELECT"|| location=="" || location =="SELECT" ||business=="" ||business=="SELECT" ||allocateduser=="" || allocateduser=="SELECT"){
      swal({
        title: "Please Fill the All fields",
        icon: "error",
        buttons: {
          confirm: true,
        },
      });
    }else{
    const addPolicyAllocationData={
      taskid:taskid,
      location:location,
      lob:business,
      allocateduser:allocateduser,
     
  }
  axios.post('http://localhost:4000/api/v8/policyAllocation/addPolicyAllocationDetails', addPolicyAllocationData)
  .then((response) => {
      console.log("Response...", response);
      if (response.status === 200) {
        swal({
          title: "Allocation Created Successfully",
          icon: "success",
        });
      } 
  });
}
  }



  render() {
    const { taskData } = this.state;

    let taskDataList = taskData.length > 0
      && taskData.map((item, i) => {
        return (
          <option key={i} value={item.task_id}>{item.task_id}</option>
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
    const { allocateUser } = this.state;

    let allocateUserList = allocateUser.length > 0
      && allocateUser.map((item, i) => {
        return (
          <option key={i} value={item.allocated_user}>{item.allocated_user}</option>
        )
      }, this);
    return (
      <>
        <div className="container card p-5" id="cardh">

          
          <div class="row" id="top">
            <div class="col-sm-3">
              <div><label>Task<span id="star">*</span></label>
              </div>
              <select class="form-control" id="taskid">
                <option>SELECT</option>
                {taskDataList}
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
              <div><label>Allocated User<span id="star">*</span></label></div>
              <select class="form-control" id="allocateduser">
                <option>SELECT</option>
                {allocateUserList}
              </select>
            </div>
      
          </div>
          <div>
            <button  onClick={this.UserSave} class="btn btn-primary btn-block col-sm-4 " id="save" >Allocation</button>

          </div>
        </div>



      </>


    );
  }




}

export default TaskAllocation;
