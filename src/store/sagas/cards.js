import { select, put, call, takeEvery } from "redux-saga/effects"

import {
    getAllCards as getAllCardsApi,
} from 'store/apis/lorApi'

import {
    types as typesTranslator,
} from "store/ducks/translator"

import {
    actions as actionsCards,
} from "store/ducks/cards"

function* loadAllCards() {
    const state = yield select();

    try {
        const cards = yield call(getAllCardsApi, state.translator.selected.code)
        yield put(actionsCards.setCards(cards))
    } catch (error) {
        console.log("Algo deu ruim!", error)
    }
}

export default [
    takeEvery(typesTranslator.IDENTIFY_LANGUAGE, loadAllCards),
    takeEvery(typesTranslator.SELECT_LANGUAGE, loadAllCards)
]