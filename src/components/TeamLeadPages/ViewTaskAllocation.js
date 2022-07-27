import React, { useEffect, useState } from "react"
import axios from "axios";
import "E:/NewREACTANDNODE/InsuranceApp/src/components/pages/style.css";

const policyAllocationFetch = () => {
  const [data, getData] = useState([]);

  useEffect(() => {
    policyAllocationData()

  }, [])


  const policyAllocationData = () => {
    axios.get('http://localhost:4000/api/v8/policyAllocation/policyAllocationView')
      .then(response => {
        console.log("policyAllocationView..", response.data.result);
        getData(response.data.result);

        for (var i = 0; i < response.data.result.length; i++) {
          console.log(response.data.result[1].uuid);

        }

      }).catch(error => {
        console.log(error.message);
      })

  }



  return (
    <>

      <div className="card mb-5 col-12  auth-main-col text-center" id='align_center_card'>
        <h1>Policy Allocation List Data</h1>
        <center>
          <tbody>
            <tr >
              <th className="table_border" >S.NO</th>
              <th className="table_borderhide" >UUID</th>
              <th className="table_border">TASK ID</th>
              <th className="table_border" >LOB</th>
              <th className="table_border" >LOCATION</th>
              <th className="table_border">ALLOCATED USER</th>
            </tr>
            {data.map((item, i) => (
              <tr id={i + 1} className="table_border" key={i}>
                <td className="table_border">{i + 1}</td>
                <td className="table_borderhide">{item.uuid}</td>
                <td className="table_border">{item.taskid}</td>
                <td className="table_border">{item.lob}</td>
                <td className="table_border">{item.location}</td>
                <td className="table_border">{item.allocateduser}</td>

              </tr>
            ))}
          </tbody>

        </center>
      </div>
    </>
  )
}
export default policyAllocationFetch;
