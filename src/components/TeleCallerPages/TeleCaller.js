import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import PhoneIcon from '@rsuite/icons/OperatePeople';

const teleCallerPolicyView = () => {
  const [allocation, getData] = useState({});

  useEffect(() => {
    policyAllocationData()

  }, [])

  const policyAllocationData = () => {
    axios.get('http://localhost:4000/api/v7/policy/getSinglePolicyInfoDetails?allocated_user=' + localStorage.getItem('TeleCaller') + '')
      .then(response => {
        console.log("policyAllocationView..", response.data.result);
        getData(response.data.result);

        // for (var i = 0; i < response.data.result.length; i++) {
        //   console.log(response.data.result[1].uuid);

        // }

      }).catch(error => {
        console.log(error.message);
      })

  }




  const phone = () => {
    swal("Mobile No Trigger")
  }

  const alterphone = () => {
    swal("Alter Mobile No Trigger")
  }

  const updateData = () => {
    const dispostion = document.getElementById("dispostion").value;
    const subdispotion = document.getElementById("subdispotion").value;
    const reminderstartdate = document.getElementById("reminderstartdate").value;
    const reminderenddate = document.getElementById("reminderenddate").value;
    const task_id=document.getElementById("taksid").value;
    if (dispostion == "" || subdispotion == "" || reminderstartdate == "" || reminderenddate == "") {
      swal("Please fille all data")
    } else {
      const policyDataUpdateDetails = {
        task_status: dispostion,
        task_substatus: subdispotion,
        start_date: reminderstartdate,
        end_date: reminderenddate,
        task_id:task_id
      };

      axios
        .put(
          "http://localhost:4000/api/v7/policy/updatPolicyData", policyDataUpdateDetails
        )
        .then((response) => {
          console.log("Response..", response);
          console.log(response.status);
          
          if (response.status === 200) {
            swal({
              title: "TC Updated Successfully",
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

      {/* {allocation.map((item, i) => (
        <> */}

      <div>
        <h4 id="policydetails">Policy Details</h4>
      </div>
      <div class="container mt-5" id="containerdata">
        <div class="row">
          <div class="col-sm-3" id="colsm">
            <div>
            </div>
            <div>

              <label for="productName">Allocation Task Id:</label>

            </div>
            <input
              type="text"
              defaultValue={allocation.task_id}
              className="form-control"
              id="taksid" readOnly
            />
            <div>

              <label for="productName">Allocation User:</label>

            </div>
            <input
              type="text"
              defaultValue={allocation.allocated_user}
              className="form-control"
              id="rolecode" readOnly
            />

            <div>
              <label for="productquantity">Allocation Line of Business:</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.lob}
              id="rolename" readOnly
            />

            <div id="row1">
              <label for="productprice">Alloation Location:</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.location}
              id="rolestatus" readOnly
            />
          </div>
          <div class="col-sm-3" id="allocationpolicyno">

            <div>
              <label for="productprice">Allocation PolicyNo:</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.policy_no}
              id="rolestatus" readOnly
            />
            <div>
              <label for="productprice">Allocation Mobile No:</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.mobileNumber}
              id="rolestatus" maxlength="10" readOnly
            />
            <div className="col" id="faphone" onClick={phone}>
              <span class="fa fa-phone" id="blue"></span>
            </div>

            <div>
              <label for="productprice" id="top">Allocation Alter Mobile No</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.mobileNumber}
              id="rolestatus" maxlength="10" readOnly />
            <div className="col" id="faphone" onClick={alterphone}>
              <span class="fa fa-phone" id="blue"></span>
            </div>

            <div id="row2">
              <label for="productprice" id="top1">Allocation Email Id</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.email}
              id="rolestatus" readOnly
            />
          </div>
          <div class="col-sm-3" id="row3">
            <div>
              <label for="productprice" id="top1">Allocation  Alter Email Id</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.alternate_email}
              id="rolestatus" readOnly
            />
            <div>
              <label for="productprice" id="top1">Allocation Vahan No</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.vaahan_no}
              id="rolestatus" readOnly
            />
            <div>
              <label for="productprice" id="top1">Allocation Start Date</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.start_date}
              id="rolestatus" readOnly
            />
            <div>
              <label for="productprice" id="top1">Allocation End Date</label>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={allocation.end_date}
              id="rolestatus" readOnly
            />
          </div>
          <div class="col-sm-3" id="borderData">

            <h4 id="tcupdate">TC UPDATE</h4>
            <div id="dis">
              <label>Dispostion</label>
              <select id="dispostion" className="form-control">
                <option value="">SELECT</option>
                <option value="Not Responding">Not Responding</option>
                <option value="Not Interested in Renewal">Not Interested in Renewal</option>
                <option value="Interested">Interested</option>
                <option value="Renewed">Renewed</option>
                <option value="Promised to Renew">Promised to Renew</option>
                <option value="Payment">Payment</option>
                <option value="Not Contactable">Not Contactable</option>
                <option value="Not Eligible">Not Eligible</option>
                <option value="Call Back">Call Back</option>
              </select>
            </div>
            <div>
              <label>Sub Dispostion</label>
              <select id="subdispotion" className="form-control">
                <option value="">Select</option>
                <option value="RNR">RNR</option><option value="Busy">Busy</option>
                <option value="Not Reachable">Not Reachable</option>
                <option value="Switch Off">Switch Off</option>
                <option value="Out of Coverage">Out of Coverage</option>
                <option value="Other">Other</option>
                <option value="Incoming Barred">Incoming Barred</option>
              </select>
            </div>

            <div>
              <label>Reminder Start Date</label>
              <input type="Date" id="reminderstartdate" className="form-control" />
            </div>

            <div>
              <label>Reminder End Date</label>
              <input type="Date" id="reminderenddate" className="form-control" />
            </div>
            <div id="btnsuccess">
              <button type="button" onClick={updateData} class="btn btn-success btn-md">Submit</button>
            </div>
          </div>


        </div>
      </div>

      {/* </>
      ))} */}












    </>
  );
};
export default teleCallerPolicyView;
