import Home from "./Home";
import Dashboard from "./DashBoard";
import Login from "./Login"
import { Route,Routes } from "react-router-dom";
import PrivateRoute from "../component/PrivateRoute";
function AllRoutes() {
  return (
   
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
   
  )
}

export default AllRoutes;
