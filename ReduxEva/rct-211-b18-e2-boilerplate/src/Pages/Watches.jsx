import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import {Link, useLocation, useParams, useSearchParams} from "react-router-dom"
//import { useState } from "react";
import {getDataMusic} from "../Redux/AppReducer/action"
import WatchCard from "../Components/WatchCard"
import { useDispatch, useSelector } from "react-redux"
const Watches = () => {
  //const [data,setData]=useState([])
  const data=useSelector((store)=>store.AppReducer.watches)
  console.log(data,"data")
  const dispatch=useDispatch();
  const [searchParam] = useSearchParams();
  const location=useLocation();
  

  useEffect(()=>{
    const sortBy=searchParam.get("sortBy")
       if(location || data.length===0){
        
        const quaryParam={
            params:{
            genre:searchParam.getAll("genre"),
            _sort:sortBy && "year",
            _order:sortBy
            }
        }

        dispatch(getDataMusic(quaryParam))
       }
   },[location.search])

  return (
    <div style={{display:"flex",justifyContent:"space-between",width:"97%",margin:"auto",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",padding:"15px"}}>
      < Filter style={{width:"20%"}} />
       
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"75%",gap:"15px"}}>
        {/* Map through the watch list here using WatchCard Component */}
        {(data!=undefined)? data.map((item)=>(
          <Link to={`/watches/:${item.id}`}>
               <WatchCard id={item.id} avatar={item.image} nameE={item.name} category={item.category}/>
          </Link>
        )):<div>Loding...</div>

        }
      </div>
    </div>
  );
};

export default Watches;

