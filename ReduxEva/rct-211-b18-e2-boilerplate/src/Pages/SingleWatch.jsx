import React from "react";
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {getDataMusic} from "../Redux/AppReducer/action"
   


const SingleWatch = () => {
  const selector = useSelector((store) => store.AppReducer.watches);
  const [data, setData] = useState({})
  const dispatch=useDispatch()
  const {id}=useParams()
  useEffect(() => {
    if (selector.length == 0) {
      dispatch(getDataMusic())
    }},[id,selector])
  

    useEffect(() => {
      if (id){
         let cur = selector.find((item) =>item.id == id)
         console.log(id)
         cur && setData(cur)
         console.log(data,"cur")
        
      }
    },[id,selector])
    console.log(selector,"sin");
  return (
    <div>
      <h2>{data.name}</h2>
      <div>
        <img src={data.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{data.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
