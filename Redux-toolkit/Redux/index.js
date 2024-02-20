const redux=require('redux')
const bindActionCreater=redux.bindActionCreators
const createstore=redux.createStore
const combineReducer=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const createLogger=require('redux-logger')
const Logger=createLogger.createLogger()
const CAKE_ORDER = 'CAKE_ORDER'
const CAKE_RESTOCK='CAKE_RESTOCK'
const ICE_CREAME_ORDER='ICE_CREAME_ORDER'
const ICE_CREAME_RESTOCK='ICE_CREAME_RESTOCK'

function ordercake() {
    return {
        type: CAKE_ORDER,
         payload: 1
    }
}
function restockCake(quant=1){
    return {
        type:CAKE_RESTOCK,
         payload:quant
    }
}
function orderIcecreame(quant=1){
    return {
        type:ICE_CREAME_ORDER,
        payload:quant
    }
}
function restockIcecreame(quant=1){
    return {
        type:ICE_CREAME_RESTOCK,
        payload:quant
    }
}
//(prev,action)=>newState

// const intState={
//     numOfCake:10,
//     numOfIcecreame:20
// }

const intialCakestate={
    numOfCake:10
}
const intialIcecreamestate={
    numOfIcecreame:20
}
// const reducer=(state=intState,action)=>{
//     switch(action.type){
//         case CAKE_ORDER :return{
//             ...state,
//             numOfCake:state.numOfCake-1
//         }
//         case CAKE_RESTOCK:return {
//             ...state,
//             numOfCake:state.numOfCake+action.payload
//         }
//         case ICE_CREAME_ORDER:return {
//             ...state,
//             numOfIcecreame:state.numOfIcecreame-action.payload
//         }
//         case ICE_CREAME_RESTOCK:return {
//             ...state,
//             numOfIcecreame:state.numOfIcecreame+action.payload
//         }
//         default : return state
//     }
// }
const reducerOfCake=(state=intialCakestate,action)=>{
    switch(action.type){
        case CAKE_ORDER :return{
            ...state,
            numOfCake:state.numOfCake-1
        }
        case CAKE_RESTOCK:return {
            ...state,
            numOfCake:state.numOfCake+action.payload
        }
        
        default : return state
    }
}
const reducerOfIcecreame=(state=intialIcecreamestate,action)=>{
    switch(action.type){
        
        case ICE_CREAME_ORDER:return {
            ...state,
            numOfIcecreame:state.numOfIcecreame-action.payload
        }
        case ICE_CREAME_RESTOCK:return {
            ...state,
            numOfIcecreame:state.numOfIcecreame+action.payload
        }
        default : return state
    }
}

// const store=createStore(reducer)

// console.log('Intial state', store.getState());
// const unsubscribe=store.subscribe(()=>console.log('subscribe state' , store.getState()))
// // store.dispatch(ordercake())
// // store.dispatch(ordercake())
// // store.dispatch(restockCake(9))
// //store.dispatch(restockCake())
// const action =bindActionCreater({ordercake,restockCake,orderIcecreame,restockIcecreame},store.dispatch)
// action.ordercake()
// action.ordercake()
// action.ordercake()
// action.restockCake(8)
// action.orderIcecreame()
// action.orderIcecreame()
// action.restockIcecreame(5)

// unsubscribe()

const rootReducer=combineReducer({cake:reducerOfCake,icecreame:reducerOfIcecreame})
const store=createstore(rootReducer,applyMiddleware(Logger))

console.log('Intial state', store.getState());
const unsubscribe=store.subscribe(()=>{})
// store.dispatch(ordercake())
// store.dispatch(ordercake())
// store.dispatch(restockCake(9))
//store.dispatch(restockCake())
const action =bindActionCreater({ordercake,restockCake,orderIcecreame,restockIcecreame},store.dispatch)
action.ordercake()
action.ordercake()
action.ordercake()
action.restockCake(8)
action.orderIcecreame()
action.orderIcecreame()
action.restockIcecreame(5)

unsubscribe()