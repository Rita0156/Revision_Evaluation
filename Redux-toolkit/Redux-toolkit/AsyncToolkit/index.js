// const { request } = require('express');
const fetchUser=require('./Feature/user/userSlice').fetchUser
const store=require('./App/store')

console.log('initial state',store.getState());

const unsubscribe=store.subscribe(()=>{console.log('updated state',store.getState())})

store.dispatch(fetchUser())
//store.dispatch(cakeAction.ordered())

unsubscribe()