import { select, put, call, takeEvery } from "redux-saga/effects"

import {
    getConfigs as getConfigsApi,
} from 'store/apis/lorApi'

import {
    types as typesTranslator,
} from "store/ducks/translator"

import {
    actions as actionsCards,
} from "store/ducks/cards"

import {
    actions as actionsDictionary,
} from "store/ducks/dictionary"

import {
    actions as actionsFilters,
} from "store/ducks/filters"

function* loadConfigs() {
    const state = yield select();

    try {
        const configs = yield call(getConfigsApi, state.translator.selected.code)

        yield put(actionsCards.setCards(configs.cards))

        yield put(actionsDictionary.setDictionary(configs.dictionary))
        yield put(actionsDictionary.setKeywords(configs.keywords))

        yield put(actionsFilters.setRegions(configs.regions))
        yield put(actionsFilters.setRarities(configs.rarities))
        yield put(actionsFilters.setTypes(configs.types))
    } catch (error) {
        console.log("Algo deu ruim!", error)
    }
}

export default [
    takeEvery(typesTranslator.IDENTIFY_LANGUAGE, loadConfigs),
    takeEvery(typesTranslator.SELECT_LANGUAGE, loadConfigs)
]