import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{width:"98%",display:"flex",margin:"auto",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",marginBottom:"30px",marginTop:"20px",justifyContent:"space-around",alignItems:"center"}} data-testid="navbar">
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <Link to="/login" style={{fontWeight:"bold",backgroundColor:"green",color:"white",border:"none",fontSize:"19px",textDecoration:"none",paddingLeft:"5px",paddingRight:"5px"}} data-testid="navbar-login-button">LOGIN</Link>
      </div>
    </div>
  );
};

export default Navbar;
//box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
//box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;