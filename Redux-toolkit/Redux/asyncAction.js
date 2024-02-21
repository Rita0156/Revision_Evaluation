const redux=require('redux')
const createstoredata=redux.createStore
const applyMiddleware=redux.applyMiddleware
const axios=require('axios')
const thunk=require('redux-thunk').default
const logger=require('redux-logger')
const log=logger.createLogger()
const intialState={
    loading:false,
    data:[],
    error:'',
    isError:false
}

const GET_REQUESTED='GET_REQUESTED'
const GET_REQUESTED_SUCCESS='GET_REQUESTED_SUCCESS'
const GET_REQUESTED_FAIL='GET_REQUESTED_FAIL'


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
function fetchDataReqapi(){
       return function (dispatch){
        dispatch(fetchDataReq())
         axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((responds)=>{
            console.log(responds,'response');
            const users=responds.data.map((user)=>user.id)
            dispatch(fetchDataReqSuccess(users))
        })
        .catch((err) =>{console.log(err,'error');
           dispatch(fetchDataReqFail(err.message))
            }
         )
       }
}

const store=createstoredata(reducer,applyMiddleware(log,thunk))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchDataReqapi())