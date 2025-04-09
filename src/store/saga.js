import initsaga from "../init/saga";
import  validateAuth  from "../auth/saga";
// import { all } from "axios";
import { call ,all} from "redux-saga/effects";

export default function* rootSaga(){
    yield all([
        // call(initsaga),
        call(validateAuth)
    ])
}