// const { request } = require('express');
const store=require('./app/store')
const cakeAction=require('./Features/cake/cakeSlice').cakeAction
const icecreameAction=require('./Features/iceCreame/icecreameSlice').icecreameAction
console.log('initial state',store.getState());

const unsubscribe=store.subscribe(()=>{console.log('updated state',store.getState());})

store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.restocked(3))

store.dispatch(icecreameAction.ordered())
store.dispatch(icecreameAction.ordered())
store.dispatch(icecreameAction.ordered())
store.dispatch(icecreameAction.restocked(3))

unsubscribe()