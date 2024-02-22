const createSlice = require('@reduxjs/toolkit').createSlice
const createAction = require('@reduxjs/toolkit').createAction
const createReducer=require('@reduxjs/toolkit').createReducer
const todoAdded = createAction('cake/ordered')

const initialState = {
    numsOfIcecreame: 20
}
createReducer(initialState, builder => {
    builder.addCase(todoAdded, (state, action) => { })
})
const icecreameSlice = createSlice({
    name: "icecreame",
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numsOfIcecreame--
        },
        restocked: (state, action) => {
            state.numsOfIcecreame += action.payload
        }
    },
    extraReducers: builder =>{
        builder.addCase(todoAdded, (state) => {
            state.numsOfIcecreame--
        })
    }
        

})

module.exports = icecreameSlice.reducer
module.exports.icecreameAction = icecreameSlice.actions