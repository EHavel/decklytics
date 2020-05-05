import { select, put, call, takeEvery } from "redux-saga/effects"

import {
    getAllFilters as getAllFiltersApi,
} from 'store/apis/lorApi'

import {
    types as typesTranslator,
} from "store/ducks/translator"

import {
    actions as actionsFilters,
} from "store/ducks/filters"

function* loadAllFilters() {
    const state = yield select();
    try {
        const filters = yield call(getAllFiltersApi, state.translator.selected.code)
        yield put(actionsFilters.setFilters(filters))
    } catch (error) {
        console.log("Algo deu ruim!", error)
    }
}

export default [
    takeEvery(typesTranslator.IDENTIFY_LANGUAGE, loadAllFilters),
    takeEvery(typesTranslator.SELECT_LANGUAGE, loadAllFilters)
]