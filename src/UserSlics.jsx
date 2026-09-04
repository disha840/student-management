import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const users=createAsyncThunk("users/userslice",async ()=>{
    const  response=await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
    
})


const UserSlics=createSlice({
    name:"users",
    initialState:{loading:false,
        data:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(users.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(users.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        builder.addCase(users.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default UserSlics.reducer