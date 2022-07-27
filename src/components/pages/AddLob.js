import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import './style.css';
import Select from 'react-select';
import axios from "axios";
const AddBusiness=() => {

  const actions = [
    { label: "ACTIVE", value: 1 },
    { label: "INACTIVE", value: 2 },
  ];

  const [roleCodeMessage, setRoleCodeMessage] = useState('');
  const [rolemessage, setRoloMessage] = useState('');
  const [statusmessage, setStatusmessage] = useState('');
  const [message, setmessage] = useState('');
  const [location,setLocation] =useState('');


  const Validations = event => {
    if(event.target.value==""){
      setRoleCodeMessage("Please Fill The LOB Name");
    }else{
      setRoleCodeMessage('');
    }
  };

  const RoleNameValidations=event=>{
    if(event.target.value==""){
      setRoloMessage("Please Select The Start Date ");
      }else{
        setRoloMessage('');
      }
  }

  const LocationValidations=event=>{
    if(event.target.value==""){
        setLocation("Please Select The End Date");
      }else{
        setLocation('');
      }
  }
  const StatusValidations=event=>{
    if(event.target.value==""){
      setStatusmessage("Please Fill The  Status Field");
      }else{
        setStatusmessage('');
      }
  }
  const handleSelectChange=event=> {
    setSelectedClient(event.target.value);
}
const SaveRoles=()=>{
  const rolecode=document.getElementById("rolecode").value;
  const rolename=document.getElementById("rolename").value;
  const locationName=document.getElementById("locationName").value;
  const status=document.getElementById("status").value;
  console.log("rolecode..",rolecode);
  console.log("rolename..",rolename);
  console.log("locationName..",locationName);
  console.log("status..",status);
  if(rolecode=="" || rolename=="" || locationName=="" || status==""){
    swal({
      title: "Please Fill the All fields",
      icon: "error",
      buttons: {
        confirm: true,
      },
    });
  }else{
    const addroles={
        lobName:rolecode,
        lobStartDate:rolename,
        lobEndDate:locationName,
        lobStatus:"Active"
    }
    axios.post('http://localhost:4000/api/v4/lob/addLob', addroles)
  .then((response) => {
      console.log("Response...", response);
      if (response.status === 200) {
        swal({
          title: "LOB Created Successfully",
          icon: "success",
        });
      } 
  });

  }
    
}
    return (
        <div className="row g-0 auth-wrapper">
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
            </div>
            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="card mb-5 col-12 col-md-4 col-lg-8 auth-main-col text-center" id='aligncenter'>
                    <fieldset class="border p-2">

                      <legend  class="float-none w-auto">Add Lob</legend>
                        <div className="auth-form-container text-start">
                                <div className="name mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="rolecode"
                                        name="locationName"
                                        placeholder="LOB Name"
                                        onChange={Validations}
                                    />
                                    <p> {roleCodeMessage}</p>
                                    <p>{message}</p>
                                </div>
                                <div className="name mb-3">
                                    <input type="date"
                                        className="form-control"
                                        id="rolename"
                                        name="locationPresent"
                                        placeholder="Effective Start Date"
                                        onChange={RoleNameValidations}
                                    />
                                    <p>{rolemessage}</p>
                                    <p>{message}</p>
                                </div>
                                <div className="name mb-3">
                                    <input type="date"
                                        className="form-control"
                                        id="locationName"
                                        name="locationPrevious"
                                        placeholder="Effective End Date"
                                        onChange={LocationValidations}
                                    />
                                    <p>{location}</p>
                                    <p>{message}</p>
                                </div>
                                <div className="name mb-3">
                                <Select options={actions} id="status" placeholder="Location Status "  />
                                <p>{statusmessage}</p>
                                <p>{message}</p>

                                </div>
                                <div className="text-center">
                                    <button onClick={SaveRoles} className="btn btn-primary w-100 theme-btn mx-auto">Save</button>
                                </div>

                        </div>
                        </fieldset>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

export default AddBusiness;
