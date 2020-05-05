import { all } from "redux-saga/effects";

import cards from "./cards"
import filters from "./filters"

export default function* rootSaga() {
    yield all([
        ...cards,
        ...filters,
    ])
}
