const { default: axios } = require('axios');

const createSlice=require('@reduxjs/toolkit').createSlice;
const asyncThunk=require('@reduxjs/toolkit').createAsyncThunk
const initialState={
    isLoading:false,
    user:[],
    error:''
}

const fetchUser=asyncThunk('user/fetchUser', async()=>{
  return await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>
        //console.log(res,'res async action');
         res.data.map((item)=>item.id)
    )
    .catch(err=>err)
})

const userSlice=createSlice({
    name:"user",
    initialState,
    extraReducers : (builder)=>{

        builder.addCase(fetchUser.pending,state=>{
            state.isLoading=true
            state.user=[]
            state.error=''
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.user=action.payload
            state.error=''
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.isLoading=false
            state.user=[]
            state.error=action.error.message
        })
        
    }
})

module.exports=userSlice.reducer
module.exports.fetchUser=fetchUser