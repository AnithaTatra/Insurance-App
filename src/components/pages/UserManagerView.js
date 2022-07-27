import React, { useEffect, useState } from "react"
import axios from "axios";
import "./style.css";
import {useHistory} from 'react-router-dom';

const UsingFetch = () => {
  const history=useHistory();
  const [users, setUsers] = useState([]);
  const [data,getData] = useState([]);
 
  useEffect(()=>{
    fetchData()
    
  },[])
  
  
  const fetchData = () => {
    axios.get('http://localhost:4000/api/v6/userManage/fetchUser')
          .then(response=>{
              console.log("FetchData..",response.data.result);
              getData(response.data.result);

              for(var i=0;i<response.data.result.length;i++){
                console.log(response.data.result[1].uuid);

              }

       }).catch(error=>{
              console.log(error.message);
          })

        }
         
    
        
        return (
            <>
             
              <div className="card mb-5 col-12  auth-main-col text-center" id='align_center_card'>
            <h1>User List Data</h1>
           <center>
            <tbody>
                <tr >
                <th className="table_border" >S.NO</th>
                <th className="table_borderhide" >UUID</th>
                <th className="table_border">USERNAME</th>
                <th className="table_border" >EMAIL</th>
                <th className="table_border" >PASSWORD</th>
                <th className="table_border">ADDRESS</th>
                <th className="table_border">ROLE</th>
                <th className="table_border">LOCATION</th>
                <th className="table_border">LOB</th>
                <th className="table_border">LANGUAGE</th>
                
               
        
                </tr>
                {data.map((item, i) => (
                    <tr id={i+1} className="table_border" key={i}>
                        <td className="table_border">{i+1}</td> 
                        <td className="table_borderhide">{item.uuid}</td>                       
                        <td className="table_border">{item.username}</td>                       
                        <td className="table_border">{item.email}</td>
                        <td className="table_border">{item.password}</td>
                        <td className="table_border">{item.address}</td>
                        <td className="table_border">{item.role}</td>
                        <td className="table_border">{item.location}</td>
                        <td className="table_border">{item.lob}</td>
                        <td className="table_border">{item.language}</td>
                       
                       
                        {/* <button className="table_border" onClick={() => viewData(i+1)}>View</button> */}
                        {/* <button className="table_border" onClick={() => deleteData(i+1)}>Delete</button>  */}
        
                    </tr>
                ))}
            </tbody>
            
            </center>
            </div>
        </>
          )
    }
    export default UsingFetch;