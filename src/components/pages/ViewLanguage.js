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
    axios.get('http://localhost:4000/api/v5/language/viewLanguage')
          .then(response=>{
              console.log("Response..",response.data.result);
              getData(response.data.result);

              for(var i=0;i<response.data.result.length;i++){
                console.log(response.data.result[1].uuid);

              }

       }).catch(error=>{
              console.log(error.message);
          })

        }
          const viewData=(data)=>{
            var Row = document.getElementById(data);
            var Cells = Row.getElementsByTagName("td");
           var viewUuId= Cells[1].innerText;
           console.log("viewUuId...",viewUuId)
            axios.get('http://localhost:4000/api/v5/language/editLanguage?uuid='+viewUuId+'')
    
                  .then(response=>{
                      console.log("Response..",response);
                       if(response){
                        history.push('/LanguageView',{state:response.data.result});
                       }
                  }).catch(error=>{
                      console.log(error.message);
                  })
    
    
        }

  
  return (
    <>
     
      <div className="card mb-5 col-12 col-md-4 col-lg-8 auth-main-col text-center" id='align_center'>
    <h1>LOB List Data</h1>
   <center>
    <tbody>
        <tr >
        <th className="table_border" >S.NO</th>
        <th className="table_borderhide" >UUID</th>
        <th className="table_border">LanguageName</th>
        <th className="table_border" >Start Date</th>
        <th className="table_border" >End Date</th>
        <th className="table_border">Status</th>
        <th className="table_border">Option</th>
       

        </tr>
        {data.map((item, i) => (
            <tr id={i+1} className="table_border" key={i}>
                <td className="table_border">{i+1}</td> 
                <td className="table_borderhide">{item.uuid}</td>                       
                <td className="table_border">{item.languageName}</td>                       
                <td className="table_border">{item.languageStartDate}</td>
                <td className="table_border">{item.languageEndDate}</td>
                <td className="table_border">{item.languageStatus}</td>
               
                <button className="table_border" onClick={() => viewData(i+1)}>View</button>
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
