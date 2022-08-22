import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchMoviesAdmin=createAsyncThunk('/Movies/fetchMoviesAdmin',async ()=>{
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
const userSliceAdmin=createSlice({
    name:'user',
    initialState:{
        value:initialValue
    },
    reducers:{
        addMovie:(state,action)=>{
            console.log('action is triggered',action)
            state.value.usersData.push(action.payload)
            try{
                const result= axios.post('http://localhost:3001/movieDetails',action.payload)
               
                return result.data
            }
            catch(e){
                console.log(e)
            }
            
            
        },
        removeMovie:(state,action)=>{
            state.value.usersData=state.value.usersData.filter((item)=>item.id!==action.payload.userid)
            state.statusText="Data Deleted"
            try{
                const result= axios.delete(`http://localhost:3001/movieDetails/${action.payload.userid}`)
               
                return result.data
            }
            catch(e){
                console.log(e)
            }
           
        },
        

      
    },
    extraReducers:{
        [fetchMoviesAdmin.pending]:(state,action)=>{
            console.log("pending",action)
           
        },
        [fetchMoviesAdmin.fulfilled]:(state,action)=>{
            console.log('fullfiled',action)
            state.value.usersData=[...state.value.usersData,...action.payload]
            
        },
        [fetchMoviesAdmin.rejected]:(state,action)=>{
            console.log('fullfiled',action)
        }
    }
})
export const {addMovie,removeMovie}=userSliceAdmin.actions
export default userSliceAdmin.reducer;