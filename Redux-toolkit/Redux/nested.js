const redux=require('redux')
const bindActionCreater=redux.bindActionCreators
const createStore=redux.createStore
const produce=require('immer').produce
const initialstate={
    name:"Rita",
    address:{
        city:'surat',
        states:'gujrat',
        pincode:394352
    }
}

const CITYADDRESS_UPDATER='CITYADDRESS_UPDATER'

function cityUpdCater(c){
    return {
      type:CITYADDRESS_UPDATER,
      payload:c
    }
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
         case CITYADDRESS_UPDATER:
        // return {
        //     ...state,
        //    address:{
        //     ...state.address,
        //     city:action.payload
        //    }
        // }
        return  produce(state,(draft)=>{
            draft.address.city=action.payload
        })
        default :return {
            ...state
        }
    }
}

const store=createStore(reducer)

console.log('Intial state', store.getState());
const unsubscribe=store.subscribe(()=>console.log('subscribe state' , store.getState()))
store.dispatch(cityUpdCater('navsari'))

// const action =bindActionCreater({ordercake,restockCake,orderIcecreame,restockIcecreame},store.dispatch)
// action.ordercake()
// action.ordercake()
// action.ordercake()
// action.restockCake(8)
// action.orderIcecreame()
// action.orderIcecreame()
// action.restockIcecreame(5)

unsubscribe()