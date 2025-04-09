import { requestWithAuth } from "../../utils/api";
import {selectAuthToken} from "../../auth/selectors";
import { call, select } from 'redux-saga/effects';

export function* fetchWithAuth(
    path,
    { method = 'GET', json = true, query = null, body = null } = {},
) {
    const token = yield select(selectAuthToken);
    const response = yield call(
        requestWithAuth,
        path,
        method,
        token,
        query,
        body,
    );
    if (response.ok) {
        return json ? yield call([response, response.json]) : response;
    } else {
        const errorResponse = yield call(createAPIErrorResponse, response);
        // yield call(logAPIErrorResponse, errorResponse);
        throw errorResponse;
    }
}