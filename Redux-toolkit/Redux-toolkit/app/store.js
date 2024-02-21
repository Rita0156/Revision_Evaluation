const configureStore=require('@reduxjs/toolkit').configureStore
const cakeRedducer=require('../Features/cake/cakeSlice')
const store=configureStore({
    reducer :{
        cake:cakeRedducer
    }
})

module.exports=store