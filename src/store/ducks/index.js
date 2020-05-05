import { combineReducers } from 'redux'

import { reducer as cards } from "./cards"
import { reducer as filters } from "./filters"
import { reducer as translator } from "./translator"

export default combineReducers({
    cards,
    filters,
    translator,
})