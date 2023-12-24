// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionType"
const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};
//console.log(initialState,"state");
const reducer = (oldState = initialState,action) => {
 // return state;
 const {type,payLoad}=action
  switch (type) {
   case types.GET_WATCHES_DATA_REQUEST:return {
       ...oldState,
       isLoading:true,
       isError:false
   }
   case types.GET_WATCHES_DATA_SUCCESS :return {
       ...oldState,
       isLoading:false,
       watches:payLoad,
       isError:false
   }
   case types.GET_WATCHES_DATA_FAILURE :return {
       ...oldState,
       isLoading:false,
       isError:true
   }
  
   default:
       return oldState
  }
};

export  { reducer };

