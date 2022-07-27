import React, { useState } from "react";
import { useLocation,useHistory} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const LobView = () => {
  const history=useHistory();
  const { state } = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorData, setErrorData] = useState("");
  const [errorQuantity, setErrorQuantity] = useState();
  const [location,setLocation] =useState('');

  
  console.log("LobData...", state);
  const updateData = () => {
    

    const uuid = document.getElementById("uuid").value;
    const rolecode = document.getElementById("rolecode").value;
    const rolename = document.getElementById("rolename").value;
    const locationName=document.getElementById("roleName").value;
    const rolestatus = document.getElementById("rolestatus").value;
    // const date=document.getElementById('date').value;
    if (rolecode === undefined || rolecode === "") {
      setErrorMessage("Please Fill The Language Name Field");
      return false;
    } else {
      setErrorMessage("");
    }
    if (rolename === undefined || rolename === "") {
      setErrorQuantity("Please Select The Start Date Field");
      return false;
    } else {
      setErrorQuantity("");
    }
    if (locationName === undefined || locationName === "") {
        setLocation("Please Select The End Date Field");
        return false;
      } else {
        setLocation("");
      }
    if (rolestatus === undefined || rolestatus === "") {
      setErrorData("Please Fill The LanguageStatus Field");
      return false;
    } else {
      setErrorData("");
      const updateDetails = {
        uuid: uuid,
        languageName:rolecode,
        languageStartDate:rolename,
        languageEndDate:locationName,
        languageStatus:rolestatus
      };

      axios
        .put(
          "http://localhost:4000/api/v5/language/updateLanguage",updateDetails
        )

        .then((response) => {
          console.log("Response..", response);
          console.log(response.status);
          if(response){
            history.push('/viewLanguage');
           }
          if (response.status === 200) {
            swal({
              title: "Language Data Updated Successfully",
              icon: "success",
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <>
      <div className="container">
        <fieldset class="scheduler-border">
          {/* <legend class="scheduler-border">Product Update</legend> */}
          <div className="row">
             <div className="productid">
              <input type="text" defaultValue={state.state.uuid} id="uuid" />
            </div> 
            <div className="col-md-3">
              <div>

                <label for="productName">Language Name:</label>

              </div>
              <input
                type="text"
                defaultValue={state.state.languageName}
                className="form-control"
                id="rolecode"
              />
              <p className="error"> {errorMessage} </p>
            </div>
            <div className="col-md-3">
              <div>
                <label for="productquantity"> Start Date:</label>
              </div>
              <input
                type="date"
                className="form-control"
                defaultValue={state.state.languageStartDate}
                id="rolename"
              />
              <p className="error"> {errorQuantity} </p>
            </div>
            <div className="col-md-3">
              <div>
                <label for="productquantity">End Date:</label>
              </div>
              <input
                type="date"
                className="form-control"
                defaultValue={state.state.languageEndDate}
                id="roleName"
              />
              <p className="error"> {location} </p>
            </div>
            <div className="col-md-3">
              <div>
                <label for="productprice"> Status:</label>
              </div>
              <input
                type="text"
                className="form-control"
                defaultValue={state.state.languageStatus}
                id="rolestatus"
              />
              <p className="error"> {errorData} </p>
            </div>
            {/* <div className="col-md-3">
              <div>
                <label for="date">Date:</label>
              </div>
              <input type="date" className="form-control" id="date" />
            </div> */}

            <div className="clickbuttom">
              <button
                type="button"
                id="infoclick"
                className="btn btn-info"
                onClick={updateData}
              >
                Update
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};
export default LobView;
