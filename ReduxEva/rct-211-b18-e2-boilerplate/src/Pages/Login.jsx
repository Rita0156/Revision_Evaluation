import React, { useState } from "react";
import { loginFunction } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
import { Navigate, useLocation,useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import axios from "axios"

const Login = () => {

  const location = useLocation();
  const dispatch=useDispatch();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const handalSubmit=(e)=>{
  
  e.preventDefault()
  if (email && password) {
    const payload = {
      email: email,
      password:password
    }
    console.log(payload)
    dispatch(loginFunction(payload)).then((r) => {
      if (r.type == LOGIN_SUCCESS) {
        navigate(comingFrom,{replace:true})
      }
    })
  }
 }
 const comingFrom=location.state?.from.pathname || "/"
  return (
    <div>
      <h2>LOGIN</h2>
      <form >
        <div>
          <label>User Email</label>
          <br />
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} data-testid="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} data-testid="login-password" />
        </div>
        <button onClick={handalSubmit}  type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
