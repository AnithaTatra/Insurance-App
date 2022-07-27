import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import swal from "sweetalert";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "E:/NewREACTANDNODE/InsuranceApp/src/App.js";
import AppTL from "E:/NewREACTANDNODE/InsuranceApp/src/AppTL.js";
import AppTC from "E:/NewREACTANDNODE/InsuranceApp/src/AppTC.js";
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import constants from "E:/NewREACTANDNODE/InsuranceApp/src/components/Constants/Constants.js";
import FacebookLogin from "react-facebook-login";

const ProfilePage = () => {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorInvalidEmail, setErrorInvalidEmail] = useState("");
  const [showloginButton, setShowloginButton] = useState(true);
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const userLogin = () => {
    console.log("Login.....");
    var email = document.getElementById("form2Example1").value;
    var password = document.getElementById("form2Example2").value;
    if (email === undefined || email === "") {
      setErrorEmail("Please Enter Email");
    } else {
      setErrorEmail("");
      setErrorInvalidEmail("");
    }
    if (password === undefined || password === "") {
      setErrorPassword("Please Enter Password");
    } else {
      setErrorPassword("");
      const userData = {
        email: email,
        password: password,
      };

      axios
        .post(
          "http://localhost:4000/api/v6/userManage/userManagementLogin",
          userData
        )
        .then((response) => {
          console.log("Response...", response);

          if (response.status === 200) {
            console.log(
              "response.data.result.email..",
              response.data.result.email
            );
            console.log(
              "response.data.result.paasword..",
              response.data.result.password
            );
            if (response.data.result.role == constants.INSURANCE_STATUS.ADMIN) {
              if (email == response.data.result.email) {
                ReactDOM.render(
                  <Router>
                    <App />
                  </Router>,
                  document.getElementById("root")
                );
              }
            } else if (
              response.data.result.role == constants.INSURANCE_STATUS.TEAMLEAD
            ) {
              ReactDOM.render(
                <Router>
                  <AppTL />
                </Router>,
                document.getElementById("root")
              );
            } else if (
              response.data.result.role == constants.INSURANCE_STATUS.TELECALLER
            ) {
              ReactDOM.render(
                <Router>
                  <AppTC />
                </Router>,
                document.getElementById("root")
              );
              localStorage.setItem("TeleCaller",response.data.result.email)

            }
          } else {
            swal({
              title: "Login failure",
              icon: "error",
              buttons: {
                confirm: true,
              },
            });
          }
        })
        .catch((e) => {
          swal({
            title: "Login  failure",
            icon: "error",
            buttons: {
              confirm: true,
            },
          });
        });
    }
  };
  const validateEmail = () => {
    var email = document.getElementById("form2Example1").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
      setErrorInvalidEmail("Invalid Email");
      setErrorEmail("");

      return false;
    }
    setErrorInvalidEmail("");

    return true;
  };
  const responseFacebook = (response) => {
    console.log("Result.....",response);
    
    if (response.status === "unknown") {
     
      setLogin(false);
      return false;
    }
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const onLoginSuccess = (res) => {
    console.log('Login Success:', res);
    var details = jwt_decode(res.credential);
    console.log("Details....",details);

    console.log("token",res.credential)
   
    setShowloginButton(false);
    setShowlogoutButton(true);

    const userData = {
            username:details.name,
            email: details.email,
            password: "Aniitha@123",
            confirmPassword:"Aniitha@123",
            loginType:"google Sign-in",
            type:"Admin",
            mobilenumber:"7093844759",
            address:"Tripura",
            city:"Mountain view",
            state:"OOty"
          };
          axios
            .post("http://localhost:4000/api/v1/user/signUp", userData)
    
            .then((response) => {
              console.log("Response...", response);
    
    
            })
            
};

  return (
    <div class="container ">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-4 ">
            <div class="card-header ">
              <h3
                class="card-header  text-center mb-4  fw-light fs-7"
                id="head"
              >
                Login
              </h3>

              <div class="form-group">
                <label class="form-label" for="form2Example1">
                  Email address<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  onBlur={validateEmail}
                  id="form2Example1"
                  class="form-control "
                />
                <p className="error">{errorEmail}</p>
                <p className="error">{errorInvalidEmail}</p>
              </div>
              <div class="form-group ">
                <label class="form-label" for="form2Example2">
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  placeholder="Enter Password"
                  class="form-control"
                />
                <p className="error">{errorPassword}</p>
              </div>

              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-group text-left">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                    <label class="form-check-label " for="form2Example31">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div class="col-md-6 text-right">
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <button
                type="button"
                onClick={userLogin}
                class="btn  btn-block mb-4"
              >
                LOGIN
              </button>
              <hr />
              <div class="text-center">
                <h6>or login with</h6>
              </div>

              {/* <div class="text-center social-btn p-3">
                <a href="#" class="btn btn-secondary">
                  <i class="fab fa-facebook-f"></i>&nbsp; Facebook
                </a>
                </div> */}
                <div class="text-center social-btn p-3">
                <a>
                { showloginButton ?
                <GoogleOAuthProvider clientId={constants.INSURANCE_STATUS.REACT_APP_GOOGLE_CLIENT_ID}>
                <GoogleLogin
                  // onSuccess={onLoginSuccess}
                  // onError={onLoginFailure}
                />
                </GoogleOAuthProvider> : null}
</a>
              </div>
              {!login && (
        <FacebookLogin
          appId="5194938033934019"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
         
        />
      )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
