//import AppContext from "../Auth/AppContex"
//import { useContext } from "react";
import { Navigate } from 'react-router-dom'
function PrivateRoute({children}) {
    // fix code here
    //const {intial}=useContext(AppContext)
    let token=(localStorage.getItem("apptoken"))||""
    if(token==""){
      <Navigate to="/login" replace={true}/>
    }
    else{
      return {children}
    }
  }
  
  export default PrivateRoute;
  