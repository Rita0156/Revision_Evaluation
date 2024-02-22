const createSlice=require('@reduxjs/toolkit').createSlice
const createAction=require('@reduxjs/toolkit').createAction
//const todoAdded = createAction('icecreame/ordered')
const createReducer=require('@reduxjs/toolkit').createReducer
const todoAdded = createAction('icecreame/ordered')

const initialState={
    numsOfcake:10
}
createReducer(initialState, builder => {
    builder.addCase(todoAdded, (state, action) => { })
})
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
    },
    extraReducers : builder =>{
        builder.addCase(todoAdded, (state) => {
            state.numsOfcake--
        })
    }
})

module.exports=cakeSlice.reducer
module.exports.cakeAction=cakeSlice.actions