import React from 'react';
import axios from "axios";


const ForgotPassword = () =>{

  const ResetLink = () =>{
    console.log("RESETLink.....")
    const email = document.getElementById('emailInput').value
    const resetData ={
     email:email
    }
    axios
    .post("http://localhost:4000/api/v1/user/forgotPassword",resetData)

  }
    return(
      <div class="card mb-5">
<div class="container">
    <div class="row">
        <div class="row" id='rowwidth'>
            <div class="col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-center">
                          {/* <h3><i class="fa fa-lock fa-4x"></i></h3> */}
                          <h2 class="text-center">Forgot Password?</h2>
                            <div class="panel-body">
                              
                            
                                <fieldset>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                      
                                      <input id="emailInput" placeholder="email address" class="form-control" type="email" oninvalid="setCustomValidity('Please enter a valid email address!')" onChange="try{setCustomValidity('')}catch(e){}" required=""/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <input class="btn btn-lg btn-primary btn-block" value="Send My Password" onClick={ResetLink}/>
                                  </div>
                                </fieldset>
                              
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );
}

export default ForgotPassword;