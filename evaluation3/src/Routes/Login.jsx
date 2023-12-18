import { Link } from "react-router-dom";
import "./login.css"
import { useState } from "react";
function Login() {
    const [email,setEmail]=useState("")
    const [password,setPass]=useState("")
    const register=(e)=>{
        e.preventDefault()
        let obj={
            email:email,
            password:password
        }
            fetch(" https://reqres.in/api/login",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(obj)
            })
            .then((req)=>{
                return req.json()
            })
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
  return (
    <div className="formdiv">
        <h1 style={{textAlign:"center"}}>Login Form</h1>
      <form onSubmit={register} data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}
              value={email} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e)=>{setPass(e.target.value)}}
              value={password}
            />
          </label>
        </div>
        <div className="sub">
          <input  id="sub" data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
