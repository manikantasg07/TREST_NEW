import { createSlice } from "@reduxjs/toolkit";
import { ITEMS_PER_PAGE } from "./constants";

const initialPaginationContext = {
    pageIndex:0,
    itemsPerPage:ITEMS_PER_PAGE,
    sortBy:null,
    search:null,
    startDate:null,
    endDate:null,
    totalItems:0
}

const tokensSlice = createSlice({
    name:"tokens",
    initialState:{
        loading: false,
        tokens: [],
        errors: null,
        paginationContext: initialPaginationContext,
        exportData: null,
    },
    reducers:{
        fetchTokensRequested:(state,action)=>{
            state.loading=true;
            state.paginationContext.pageIndex = action.payload.pageIndex;
            state.paginationContext.sortBy = action.payload.sortBy;

        },
        fetchTokensSucceeded:(state,action)=>{
            const { tokens, totalItems } = action;
            state.loading=false;
            state.tokens=tokens;
            state.paginationContext.totalItems = totalItems;

        },
        fetchTokensFailed:(state,action)=>{
            const {errors} =action;
            state.errors = errors;
        },
        storePaginationContext:(state,action)=>{
            state.paginationContext = {
                ...state.paginationContext,
                ...action.payload
            }
        },
        resetPaginationContext:(state)=>{
            state.paginationContext = initialPaginationContext;
        }
    }
})

export const {fetchTokensRequested,fetchTokensSucceeded,fetchTokensFailed,storePaginationContext} = tokensSlice.actions;
export default tokensSlice.reducer;