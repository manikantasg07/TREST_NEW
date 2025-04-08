import { createSlice } from "@reduxjs/toolkit";
import { INIT_STATUS_INITIALIZING,INIT_STATUS_FAILED,INIT_STATUS_INITIALIZED } from "./constants";

const initSlice = createSlice({
    name:"init",
    initialState:{
        status: INIT_STATUS_INITIALIZING,
        errors:null,
    },
    reducers:{
        initizalizing:(state)=>{
            state.status=INIT_STATUS_INITIALIZING
        },

        initializationSucceeded:(state)=>{
            state.status=INIT_STATUS_INITIALIZED
        },
        initializationFailed:(state,action)=>{
            state.status=INIT_STATUS_FAILED
            state.errors=action.payload
        }
    }
})

export const {initializationSucceeded,initializationFailed} = initSlice.actions;
export default initSlice.reducer;