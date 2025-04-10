import Cookies from 'js-cookie';
import { all, put, takeLatest, call, select } from 'redux-saga/effects';
import { authenticationFailed,authenticationSucceeded } from './reducer';
// import axios from 'axios';
import { initializationFailed,initializationSucceeded } from '../init/reducer';
import { AUTH_STATUS_REQUESTED_ACTION,AUTH_STATUS_SUCCEEDED_ACTION,AUTH_STATUS_FAILED_ACTION } from './constants';

async function validateToken(token = null) {
    const headers = {
        client: 'internal',
        Accept: 'application/json',
    };

    if (token !== null) {
        headers.Authorization = 'Bearer ' + token;
    }
    const method = 'GET';
    const options = { method, headers };
    return fetch('/auth/validateToken', options);
}


// export function* validateAuth(){
//     const token = Cookies.get('jwt');

//     if(token){
//        const response =  yield call(validateToken,token);
//        if(response.ok){
//             const result = yield call([response, response.json]);
//             if (result.error) {
//                 yield put(authenticationFailed(response.error));
//             } else {
//                 yield put(authenticationSucceeded(token, result.data));
//             }
//        }
//        else{

//        }

//     }
// }

function* loginRedirect() {
    const pathname = window.location.pathname+window.location.search;
    console.log("Path: ",pathname);
    // ?redirect=${pathname}
    window.location.href = `/auth/login?redirect=/reports`;
}

export function* validateAuth() {
    const token = Cookies.get('jwt');
    if (token) {
        const response = yield call(validateToken, token);
        if (response.ok) {
            const result = yield call([response, response.json]);
            if (result.error) {
                yield put(authenticationFailed(response.error));
            } else {
                yield put(authenticationSucceeded(token, result.data));
            }
        } else {
            yield loginRedirect();
        }
    } else {
        yield loginRedirect();
    }
}

export function* authFailed() {
    yield put(
        initializationFailed(
            'Token validation error, please check authentication service.',
        ),
    );
}

export function* authSucceeded() {
    yield put(initializationSucceeded());
}

export default function*(){
    yield all([
        takeLatest(AUTH_STATUS_REQUESTED_ACTION,validateAuth),
        takeLatest(AUTH_STATUS_SUCCEEDED_ACTION,authSucceeded),
        takeLatest(AUTH_STATUS_FAILED_ACTION,authFailed)
    ])
}