//Write the ActionCreator functions here
import * as types from "./actionType";
import axios from "axios";

export const getDataMusic=(params)=>(dispatch)=>{
     dispatch({type:types.GET_WATCHES_DATA_REQUEST}) 
   return axios.get(` http://localhost:8080/watches`,params)
    .then((d)=>{
        return dispatch({
            type:types.GET_WATCHES_DATA_SUCCESS,
            payLoad:d.data
            
        })
    })
    .catch((e)=>{
        return dispatch({
            type:types.GET_WATCHES_DATA_FAILURE
        })
    })
}
