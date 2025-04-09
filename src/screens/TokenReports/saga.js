import { fetchTokensRequested } from "./reducer";
import { fetchWithAuth } from "../../store/api/saga";
import { getRequestFields, selectPaginationContext } from "./selectors";

export function* fetchTokens() {
    try {
        const standardQuery = yield select(getRequestFields);
        const { itemsPerPage, pageIndex } = yield select(selectPaginationContext);

        const query = {
            ...standardQuery,
            itemsPerPage,
            pageIndex,
        };
        const response = yield call(fetchWithAuth, `tokens`, {
            method: 'GET',
            query,
        });
        const { data: { items = [], totalItems } = {}, error } = response;
        if (error && error.message) {
            yield put(fetchTokensFailed(error.message));
        } else {
            yield put(fetchTokensSucceeded(items, totalItems));
        }
    } catch (error) {
        yield put(fetchTokensFailed(error));
    }
}

export default function* (){
    yield all([takeLatest("tokens/fetchTokensRequested", fetchTokens)]);
}