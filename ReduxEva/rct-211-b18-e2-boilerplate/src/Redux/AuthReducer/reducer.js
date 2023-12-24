// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState,action) => {
  //return state;
  const {type,payLoad}=action
    switch(type){
        case types.LOGIN_REQUEST : return{
            ...oldState,
            isLoading:true

        };
        case types.LOGIN_SUCCESS : return{
            ...oldState,
            isLoading:false,
            isAuth:true,
            token:payLoad

        };
        case types.LOGIN_FAILURE : return{
            ...oldState,
            isLoading:false,
            isAuth:false,
            token:"",
            isError:true

        }
        default :
        return oldState
    }
};

export  { reducer };
