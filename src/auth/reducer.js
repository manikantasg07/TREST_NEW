import { createSlice } from "@reduxjs/toolkit";
import { AUTH_STATUS_REQUESTED,AUTH_STATUS_SUCCEEDED,AUTH_STATUS_FAILED } from "./constants";

const authSlice =  createSlice({
    name:"auth",
    initialState:{
        status:AUTH_STATUS_REQUESTED,
        errors:null
    },
    reducers:{
        authenticationRequested:(state)=>{

        },
        authenticationSucceeded:(state,action)=>{
            state.status=AUTH_STATUS_SUCCEEDED;
            state.token=action.payload.token;
            state.profile = action.payload.profile;
        },
        authenticationFailed:(state,action)=>{
            state.status = AUTH_STATUS_FAILED;
            state.errors=action.payload.errors;
        }
    }
})

export const {authenticationRequested, authenticationSucceeded, authenticationFailed} = authSlice.actions;
export default authSlice.reducer;