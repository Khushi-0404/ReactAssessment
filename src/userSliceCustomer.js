import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchMovies=createAsyncThunk('/Movies/fetchMovies',async ()=>{
try{
    const result=await axios.get('http://localhost:3001/movieDetails')
   
    return result.data
}
catch(e){
    console.log(e)
}
})


const initialValue={
    usersData:[],
    statusText:""
}
const userSliceCustomer=createSlice({
    name:'user',
    initialState:{
        value:initialValue
    },
    reducers:{
        
      
    },
    extraReducers:{
        [fetchMovies.pending]:(state,action)=>{
            console.log("pending",action)
           
        },
        [fetchMovies.fulfilled]:(state,action)=>{
            console.log('fullfiled',action)
            state.value.usersData=[...state.value.usersData,...action.payload]
            
        },
        [fetchMovies.rejected]:(state,action)=>{
            console.log('fullfiled',action)
        }
    }
})

export default userSliceCustomer.reducer;