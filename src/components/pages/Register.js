import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import './style.css';
import validatorr from 'validator';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
    const [MobileNumber,setMobileNumber]=useState('');
    const [Address,setAddress]=useState('');
    const [State,setState]=useState('');
    const [City,setCity]=useState('');
    const [namevalidation,setErrorName]=useState('');
    const [emailValiation,setemailValiation]=useState('');
    const [validationpassword,setvalidationPassword]=useState('');
    const [Confirmvalidationpassword,setConfirmvalidationPassword]=useState('');
    const [ValidationsMobileNumber,setValidationsMobileNumber]=useState('');
    const nameValidations=()=>{
      const name=document.getElementById("name").value;
      if (/^[A-Z\sa-z0-9]+$/.test(name)){
        setErrorName("");
      }else{
        setName("");
        setErrorName("Only Allowed Characters and Numbers")

      }

    }

    const emailValidation=()=>{
      const email=document.getElementById("email").value;
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        setemailValiation("");
      }
      else{
        setEmail("");
        setemailValiation("You have entered an invalid email address!")
      }
    }

    const passwordvalidations=()=>{
      const password=document.getElementById("password").value;

        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)){
          setvalidationPassword("");

        }else{
          setvalidationPassword("Min 1 uppercase letter and Min 1 lowercase letter and Min 1 special character and Min 1 number and Min 8 characters and Max 30 characters")
          setPassword("");
          
        }
    }

    const Confirmpasswordvalidations=()=>{
      const password=document.getElementById("password").value;
        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)){
          setConfirmvalidationPassword("");
        }else{
          setConfirmvalidationPassword("Min 1 uppercase letter and Min 1 lowercase letter and Min 1 special character and Min 1 number and Min 8 characters and Max 30 characters")
          setConfirmPassword("");
        }
    }

    const mobileNumberValidations=()=>{
      const MobileNumber=document.getElementById("MobileNumber").value;
      if(/^[0-9]*$/.test(MobileNumber)){
        setValidationsMobileNumber("");
      }else{
        setMobileNumber("");
        setValidationsMobileNumber("Only Allowed Mobile Number 10 digits")

      }

    }
const Signup=()=> {

  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  const ConfirmPassword=document.getElementById("ConfirmPassword").value;
  const MobileNumber=document.getElementById("MobileNumber").value;
  const Address=document.getElementById("Address").value;
  const City=document.getElementById("city").value;
  const State=document.getElementById("state").value;
  if(password!="" && ConfirmPassword!=""){
    if(password===ConfirmPassword){
     alert("password match")
    }else{
    alert("Not Match")
    return false;
    }
  }
   if(name===""){
    setName("Please Enter Name")
   }
   else{
    setName("");
   }
   if(email===""){
    setEmail("Please Enter Email")
   }
   else{
    setEmail("");
   }
   if(password===""){
    setvalidationPassword("");
    setPassword("Please Enter Password")
   }else{
    setPassword("");
   }
   if(ConfirmPassword===""){
    setConfirmvalidationPassword("");
    setConfirmPassword("Please Enter Confirmpassword")
   }else{
    setConfirmPassword("");
   }
   if(MobileNumber===""){
    setMobileNumber("Please Enter mobileNumber")
  }
  if(Address===""){
    setAddress("Please Enter Address")
  }else{
    setAddress("");
  }
  if(City===""){
    setCity("Please Enter City")
  }else{
    setCity("");
  }
  if(State===""){
    setState("Please Enter State")
  }else{
    setState("");
    const addData= { 
      'username': name,
      'email': email,
      'password':password,
      'confirmPassword':ConfirmPassword,
      'mobilenumber':MobileNumber,
      'address':Address,
      'city':City,
      'state':State
  };
  axios.post('http://localhost:4000/api/v1/user/signUp', addData)
  .then((response) => {
      console.log("Response...", response);

      if (response.status === 200) {
        swal({
          title: "SignUp Successful",
          icon: "success",
        });
      } else {
        swal({
          title: "SignUp failure",
          icon: "error",
          buttons: {
            confirm: true,
          },
        });
      }
    })
    .catch((e) => {
      swal({
        title: "SignUp failure",
        icon: "error",
        buttons: {
          confirm: true,
        },
      });
    });
}
  }
 

    return (
        <div class="card mb-5">

        <div className="row g-0 auth-wrapper">
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
                {/* <div className="Register"></div> */}
                {/* <img className="imag_css" src={logo} alt="Logo" />; */}

            </div>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="col-12 col-md-4 col-lg-8 auth-main-col text-center" id='aligncenter'>
                        <p>Create your Account</p>
                        <div className="auth-form-container text-start">

                                <div className="name mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        onChange={nameValidations}
                                    />
                                    <p>{name}</p>
                                    <p>{namevalidation}</p>
                                   
                                </div>

                                <div className="email mb-3">
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={emailValidation}

                                    />
                                    <p>{emailValiation}</p>
                                 <p>{email}</p>
                                    
                                </div>

                                <div className="password mb-3">
                                    <div className="input-group">
                                   
                                        <input type="text"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            onChange={passwordvalidations}
                                        />
                                       
                                    </div>
                                    <p>{password}</p>
                                    <p>{validationpassword}</p>
                                </div>

                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type="text"
                                            className='form-control'
                                            name="ConfirmPassword"
                                            id="ConfirmPassword"
                                            placeholder="ConfirmPassword"
                                            onChange={Confirmpasswordvalidations}
                                        />
                                       
                                    </div>
                                    <p>{ConfirmPassword}</p>
                                    <p>{Confirmvalidationpassword}</p>


                                </div>
                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type ='text'
                                            className="form-control"
                                            name="MobileNumber"
                                            id="MobileNumber"
                                            placeholder="MobileNumber" maxlength="10"
                                            onChange={mobileNumberValidations}
                                        />
                                       
                                    </div>
                                    <p>{MobileNumber}</p>
                                    <p>{ValidationsMobileNumber}</p>


                                    </div>

                                       {/* ADDRESS */}
<div>
                                       <div className="password mb-3">
                                    <div className="input-group">
                                        <input type ='text'
                                            className="form-control"
                                            name="Address"
                                            id="Address"
                                            placeholder="Address"
                                        />
                                        {/* This is the Commetn hide and show */}
                                        {/* <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => toggleMobileNo(e)} > </button> */}

                                        
                                    </div>
                                    <p>{Address}</p>
                                    </div>
                                    <div>
                                    <div className="password mb-3">
                                    <div className="name mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                    />

                                   
                                </div>
                                <p>{City}</p>
                                </div>
                                </div>
                                <div className="name mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        placeholder="State"/>

                                </div>
<p>{State}</p>
                                    </div>


                                <div className="text-center">
                                    <button onClick={Signup} className="btn btn-primary w-100 theme-btn mx-auto">Sign Up</button>
                                </div>

                            <hr />
                            <div className="auth-option text-center pt-2">Have an account? <Link className="text-link" to="/login" >Sign in</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Register;
