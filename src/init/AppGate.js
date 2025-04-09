import React from "react";
import { selectInitErrors, selectInitStatus } from "./selector";
import { useSelector } from "react-redux";
import { INIT_STATUS_INITIALIZED,INIT_STATUS_INITIALIZING,INIT_STATUS_FAILED } from "./constants";
import { Navigate,useLocation } from "react-router-dom";



export default function AppGate({children}){

    const initStatus = useSelector(selectInitStatus);
    const initErrors = useSelector(selectInitErrors);

    const {pathname,search} = useLocation();

    if(initStatus==INIT_STATUS_INITIALIZING){
        return <div>Loading....</div>
    }
    else if (initStatus==INIT_STATUS_INITIALIZED){
        return children;
    }
    else{ 
        // return <Navigate to={`https://jsonplaceholder.typicode.com/users`} />

        // return <Navigate to={`http:///auth/login?redirect=${pathname}${search}`} />
        <div>{initErrors}</div>

    }
}