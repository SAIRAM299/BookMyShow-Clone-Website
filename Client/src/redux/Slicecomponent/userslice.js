import {createSlice} from "@reduxjs/toolkit";

const userslice = createSlice({
   name:"users",

   initialState:{
    user:null
   },

   reducers:{
    Setuser:(state , action)=>{
state.user=action.payload
    }
   }
})

export default userslice.reducer

export const {Setuser}=userslice.actions