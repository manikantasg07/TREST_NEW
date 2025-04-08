import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "../auth/reducer"
import initReducer from "../init/reducer"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import tokenReducer from "../Reports/reducer";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer:{
        auth:authReducer,
        init:initReducer,
        tokens:tokenReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;
