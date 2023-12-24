import React from "react";
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {getDataMusic} from "../Redux/AppReducer/action"
   


const SingleWatch = () => {
  const [currentId,setCurrentId]=useState({})
      const {id}=useParams()
      const data=useSelector((store)=>store.watches)
      console.log(id,"single")
      const dispatch=useDispatch()

      

      useEffect(()=>{
        
          if(id){
            const currentMusic=data.find((item)=>item.id==id);
            currentMusic && setCurrentId(currentMusic)
            console.log(currentMusic,"wa");
          }
      },[id,data])

      useEffect(()=>{
        if(data.length===0){
            dispatch(getDataMusic())
        }
    },[data.length,dispatch])
  return (
    <div>
      <h2>{currentId.name}</h2>
      <div>
        <img src={currentId.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentId.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
