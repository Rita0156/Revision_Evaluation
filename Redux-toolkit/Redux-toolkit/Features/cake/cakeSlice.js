const createSlice=require('@reduxjs/toolkit').createSlice
const initialState={
    numsOfcake:10
}
const cakeSlice=createSlice({
    name:"cake",
    initialState:initialState,
    reducers:{
        ordered:(state)=>{
           state.numsOfcake--
        },
        restocked:(state,action)=>{
           state.numsOfcake+=action.payload
        }
    }
})

module.exports=cakeSlice.reducer
module.exports.cakeAction=cakeSlice.actions