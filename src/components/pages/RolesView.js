import React, { useState } from "react";
import { useLocation,useHistory} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const RolesView = () => {
  const history=useHistory();
  const { state } = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorData, setErrorData] = useState("");
  const [errorQuantity, setErrorQuantity] = useState();
  
  console.log("ProductData...", state);
  const updateData = () => {
    

    const uuid = document.getElementById("uuid").value;
    const rolecode = document.getElementById("rolecode").value;
    const rolename = document.getElementById("rolename").value;
    const rolestatus = document.getElementById("rolestatus").value;
    // const date=document.getElementById('date').value;
    if (rolecode === undefined || rolecode === "") {
      setErrorMessage("Please Fill The Rolecode Name Field");
      return false;
    } else {
      setErrorMessage("");
    }
    if (rolename === undefined || rolename === "") {
      setErrorQuantity("Please Fill The Rolename Field");
      return false;
    } else {
      setErrorQuantity("");
    }
    if (rolestatus === undefined || rolestatus === "") {
      setErrorData("Please Fill The Rolestatus Field");
      return false;
    } else {
      setErrorData("");
      const updateDetails = {
        uuid: uuid,
        rolecode: rolecode,
        rolename: rolename,
        rolestatus: rolestatus,
      };

      axios
        .put(
          "http://localhost:4000/api/v2/role/updaterole",updateDetails
        )

        .then((response) => {
          console.log("Response..", response);
          console.log(response.status);
          if(response){
            history.push('/viewRole');
           }
          if (response.status === 200) {
            swal({
              title: "Roles Data Updated Successfully",
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

                <label for="productName">Role Code:</label>

              </div>
              <input
                type="text"
                defaultValue={state.state.rolecode}
                className="form-control"
                id="rolecode"
              />
              <p className="error"> {errorMessage} </p>
            </div>
            <div className="col-md-3">
              <div>
                <label for="productquantity">Role Name:</label>
              </div>
              <input
                type="text"
                className="form-control"
                defaultValue={state.state.rolename}
                id="rolename"
              />
              <p className="error"> {errorQuantity} </p>
            </div>
            <div className="col-md-3">
              <div>
                <label for="productprice">Role Status:</label>
              </div>
              <input
                type="text"
                className="form-control"
                defaultValue={state.state.rolestatus}
                id="rolestatus"
              />
              <p className="error"> {errorData} </p>
            </div>
            <div className="col-md-3">
              <div>
                <label for="date">Date:</label>
              </div>
              <input type="date" className="form-control" id="date" />
            </div>

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
export default RolesView;
