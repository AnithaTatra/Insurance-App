import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import './style.css';
import Select from 'react-select';
import axios from "axios";
const AddRole=() => {

  const actions = [
    { label: "ACTIVE", value: 1 },
    { label: "INACTIVE", value: 2 },
  ];

  const [roleCodeMessage, setRoleCodeMessage] = useState('');
  const [rolemessage, setRoloMessage] = useState('');
  const [statusmessage, setStatusmessage] = useState('');
  const [message, setmessage] = useState('');


  const Validations = event => {
    if(event.target.value==""){
      setRoleCodeMessage("Please Fill The Role Code");
    }else{
      setRoleCodeMessage('');
    }
  };

  const RoleNameValidations=event=>{
    if(event.target.value==""){
      setRoloMessage("Please Fill The Role Name");
      }else{
        setRoloMessage('');
      }
  }

  const StatusValidations=event=>{
    if(event.target.value==""){
      setStatusmessage("Please Fill The Role Status");
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
  const status=document.getElementById("status").value;
  console.log("rolecode..",rolecode);
  console.log("rolename..",rolename);
  console.log("status..",status);
  if(rolecode=="" || rolename=="" || status==""){
    swal({
      title: "Please Fill the All feilds",
      icon: "error",
      buttons: {
        confirm: true,
      },
    });
  }else{
    const addroles={
      rolecode:rolecode,
      rolename:rolename,
      rolestatus:"Active"
    }
    axios.post('http://localhost:4000/api/v2/role/role', addroles)
  .then((response) => {
      console.log("Response...", response);
      if (response.status === 200) {
        swal({
          title: "Role Creted Successfully",
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

                      <legend  class="float-none w-auto">Add Role</legend>
                        <div className="auth-form-container text-start">
                                <div className="name mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="rolecode"
                                        name="rolecode"
                                        placeholder="Role Code"
                                        onChange={Validations}
                                    />
                                    <p> {roleCodeMessage}</p>
                                    <p>{message}</p>
                                </div>
                                <div className="name mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="rolename"
                                        name="rolename"
                                        placeholder="Role Name "
                                        onChange={RoleNameValidations}
                                    />
                                    <p>{rolemessage}</p>
                                    <p>{message}</p>
                                </div>
                                <div className="name mb-3">
                                <Select options={actions} id="status" placeholder="Status"  />
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

export default AddRole;
