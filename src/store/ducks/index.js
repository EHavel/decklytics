import { combineReducers } from 'redux'

import { reducer as cards } from "./cards"
import { reducer as globals } from "./globals"
import { reducer as filters } from "./filters"
import { reducer as translator } from "./translator"
import { reducer as dic } from "./dictionary"

export default combineReducers({
    cards,
    globals,
    filters,
    translator,
    dic,
})