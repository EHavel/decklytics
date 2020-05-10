import { select, put, call, takeEvery } from "redux-saga/effects"

import {
    getGlobals as getGlobalsApi,
} from 'store/apis/lorApi'

import {
    types as typesTranslator,
} from "store/ducks/translator"

import {
    actions as actionsFilters,
} from "store/ducks/filters"

import {
    actions as actionsGlobals,
} from "store/ducks/globals"

function* loadAllFilters() {
    const state = yield select();
    try {
        const globals = yield call(getGlobalsApi, state.translator.selected.code)
        yield put(actionsFilters.setFilters(globals))
        yield put(actionsGlobals.setGlobals(globals))
    } catch (error) {
        console.log("Algo deu ruim!", error)
    }
}

export default [
    takeEvery(typesTranslator.IDENTIFY_LANGUAGE, loadAllFilters),
    takeEvery(typesTranslator.SELECT_LANGUAGE, loadAllFilters)
]