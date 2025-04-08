import Cookies from 'js-cookie';
import { all, put, takeLatest, call, select } from 'redux-saga/effects';
import { authenticationFailed,authenticationSucceeded } from './reducer';
import axios from 'axios';
import { initializationFailed,initializationSucceeded } from '../init/reducer';

async function validateToken(token = null) {
    const headers = {
        client: 'internal',
        Accept: 'application/json',
    };

    if (token !== null) {
        headers.Authorization = 'Bearer ' + token;
    }
    // const method = 'GET';
    // const options = { headers };
    return axios.get('/auth/validateToken', {headers});
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

// function* loginRedirect() {
//     // const pathname = yield select(getPathname);
//     window.location.href = `/auth/login?redirect=${pathname}`;
// }

export function* validateAuth(){
    try {
        const token = Cookies.get('jwt');
        if(token){
            const response =  yield call(validateToken,token);
            yield put(authenticationSucceeded(token,response.data))
        }
        else{
            yield put(authenticationFailed("Token not present"))
        }
        
    } catch (error) {
        const message = error.response?.data?.message || error.message || "Unknown error";
        yield put(authenticationFailed(message)); 
    }

}

export function* authFailed() {
    yield put(
        initializationFailed(
            'Token validation error, please check authentication service.',
        ),
    );
    // yield call(loginRedirect);
}

export function* authSucceeded() {
    yield put(initializationSucceeded());
}

export default function*(){
    yield all([
        takeLatest("auth/authenticationRequested",validateAuth),
        takeLatest("auth/authenticationSucceeded",authSucceeded),
        takeLatest("auth/authenticationFailed",authFailed)
    ])
}