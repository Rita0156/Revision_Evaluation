//Create the HOC for protected Routes
import { useSelector } from "react-redux";
import {Navigate,useLocation} from "react-router-dom"
const ReqAuth = ({children}) => {
    const isAuth = useSelector((store) => store.Authreducer.isAuth)
    const location = useLocation()
    console.log(location,'req')
    // console.log(isAuth, "isAuth")
    if (!isAuth) {
        return <Navigate to='/login'  replace={true} state={{from:location}} />
    }
    
    return children
};

export default ReqAuth;
