const configureStore=require('@reduxjs/toolkit').configureStore
const userReducer=require('../Feature/user/userSlice')
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
        
        user : userReducer
    },
    // middleware : (getDefaultMiddleware)=>
    //       getDefaultMiddleware().concat(logger),
    
})

module.exports=store