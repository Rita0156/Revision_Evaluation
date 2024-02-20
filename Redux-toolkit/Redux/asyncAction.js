const redux=require('redux')
const createstore=redux.createStore
const intialState={
    loading:false,
    data:[],
    error:'',
    isError:false
}

const GET_REQUESTED='GET_REQUESTED'
const GET_REQUESTED_SUCCESS='GET_REQUESTED_SUCCESS'
const GET_REQUESTED_FAIL='GET_REQUESTED_FAIL'

const fetchDataReq=()=>{
    return {
        type:GET_REQUESTED
    }
}
const fetchDataReqSuccess=(user)=>{
    return {
        type:GET_REQUESTED_SUCCESS,
        payload:user
    }
}
const fetchDataReqFail=(err)=>{
    return {
        type:GET_REQUESTED_FAIL,
        payload:err
    }
}

const reducer=((state=intialState,action)=>{
    const {type,payload}=action
  switch(type){
     case GET_REQUESTED :return{
        ...state,
        loading:true,
     }
     case GET_REQUESTED_SUCCESS :return{
        ...state,
        loading:false,
        data:payload,
        error:''
     }
     case GET_REQUESTED :return{
        ...state,
        loading:false,
        error:payload,
        isError:true,
        data:[]
     }
     default :return{
       ...state
     }
  }
})

const store=createstore()