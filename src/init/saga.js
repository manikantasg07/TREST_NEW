import { put } from 'redux-saga/effects';
import { authenticationRequested } from '../auth/reducer';

export default function* initsaga(){
    yield put(authenticationRequested());
}
