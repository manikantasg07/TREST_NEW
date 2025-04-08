import { createSelector } from "reselect";

const getAuthSate = (state)=>state.auth;

const selectAuthToken = createSelector(
    getAuthSate,
    (authState)=>authState.token
);