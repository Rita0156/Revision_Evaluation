const configureStore=require('@reduxjs/toolkit').configureStore
const cakeRedducer=require('../Features/cake/cakeSlice')
const icecreameReducer=require('../Features/iceCreame/icecreameSlice')
const reduxLogger=require('redux-logger')

//without extra reducer

// const logger=reduxLogger.createLogger()
// const store=configureStore({
//     reducer : {
//         cake:cakeRedducer,
//         icecreame:icecreameReducer
//     },
//     middleware : (getDefaultMiddleware)=>
//           getDefaultMiddleware().concat(logger),
    
// })

// module.exports=store

//with extra reducer wiyhout logger
//const logger=reduxLogger.createLogger()
const store=configureStore({
    reducer : {
        cake:cakeRedducer,
        icecreame:icecreameReducer
    },
    // middleware : (getDefaultMiddleware)=>
    //       getDefaultMiddleware().concat(logger),
    
})

module.exports=store