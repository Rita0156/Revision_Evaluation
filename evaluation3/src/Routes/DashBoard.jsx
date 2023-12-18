import { useEffect, useState } from "react";
//import Pagination from "../component/Pagination";
//import "./dash.css"
import { Navigate } from 'react-router-dom'
function Dashboard() {
    const [data,setdata]=useState([])
    const [currentPage,setCurrent]=useState(1)
    const limit=20
    let token=(localStorage.getItem("apptoken"))||""
    
    const getData=()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`)
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res);
            
            setdata(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
     const handalLog=()=>{
        token=""
        localStorage.setItem("apptoken",token)
        return <Navigate replace to="/login" />
     }
    
    console.log(data,"all data")
    useEffect(()=>{
          getData()
    },[currentPage])
    if (!token) {
        return <Navigate replace to="/login" />;
    }else
  return (
    <div>
        <h3>Dashboard</h3>
      <div  >
      
      <h4 data-testid="token">TOKEN= {token}</h4>
      <button onClick={handalLog} data-testid="logout-btn">Logout</button>
      </div>
      {/* <ul data-testid="item-container">
        {data.length>0 ? data.map((item) => {
          <li data-testid="item">{item.title}</li>;
        }):""}
      </ul> */}
      <div className="items">
         {data.length>0 && data.map((item)=>(
           <div key={item.id}>
             <p >{item.title}</p>
           
           </div>
         ))}
      </div>
      <div>
          <button style={{backgroundColor:"orange", fontWeight:"bold", fontSize:"20px", marginRight:"10px"}} onClick={()=>{setCurrent(currentPage+1)}}>Next</button>
          <span style={{backgroundColor:"green", fontWeight:"bold", fontSize:"20px", padding:"5px"}}>{currentPage}</span>
          <button style={{backgroundColor:"orange", fontWeight:"bold", fontSize:"20px", marginLeft:"10px"}} onClick={()=>{setCurrent(currentPage-1)}}>Previous</button>
      </div>
      
    </div>
  );
}

export default Dashboard;
