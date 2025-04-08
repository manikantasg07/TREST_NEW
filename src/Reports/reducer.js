import { createSlice } from "@reduxjs/toolkit";

const tokensSlice = createSlice({
    name:"tokens",
    initialState:{
        loading: false,
        tokens: [],
        errors: null,
        // paginationContext: {
        //     ...initialPaginationContext,
        // },
        exportData: null,
    },
    reducers:{
        fetchTokensRequested:(state)=>{
            state.loading=true;

        },
        fetchTokensSucceeded:(state,action)=>{
            const { tokens, totalItems } = action;
            state.loading=false;
            state.tokens=tokens;

        },
        fetchTokensFailed:(state,action)=>{
            const {errors} =action;
            state.errors = errors;
        }
    }
})

export const {fetchTokensRequested,fetchTokensSucceeded,fetchTokensFailed} = tokensSlice.actions;
export default tokensSlice.reducer;