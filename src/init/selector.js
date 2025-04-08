import { createSelector } from "reselect";

const getInitState = (state)=>state.init;

export const selectInitStatus= createSelector(getInitState,(initState)=>initState.status);