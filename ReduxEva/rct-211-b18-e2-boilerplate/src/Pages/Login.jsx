import React, { useState } from "react";
import { loginFunction } from "../Redux/AuthReducer/action";


const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 const handalSubmit=(e)=>{
  
  e.preventDefault()
  const obj={
    email:email,
    password:password
  }
  loginFunction(obj)
 }

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
