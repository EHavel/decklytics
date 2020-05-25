import { all } from "redux-saga/effects";

import configs from "./configs"

export default function* rootSaga() {
    yield all([
        ...configs,
    ])
}
