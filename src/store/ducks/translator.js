import identifyLanguage from 'config/languages'

export const types = {
    IDENTIFY_LANGUAGE: "IDENTIFY_LANGUAGE",
    SELECT_LANGUAGE: "SELECT_LANGUAGE",
    PATH_LANGUAGE: "PATH_LANGUAGE",
    TRANSLATOR_IDENTIFY: "TRANSLATOR_IDENTIFY",
}

export const actions = {
    identifyLanguage: (browerLanguage) => ({
        type: types.IDENTIFY_LANGUAGE,
        code: browerLanguage,
    }),
    selectLanguage: (name, code) => ({
        type: types.SELECT_LANGUAGE,
        name: name,
        code: code,
    }),
    pathLanguage: (path) => ({
        type: types.PATH_LANGUAGE,
        path: path,
    }),
    identify: (code) => ({
        type: types.TRANSLATOR_IDENTIFY,
        code: code,
    }),
}

const INITIAL_STATE = {}

export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.IDENTIFY_LANGUAGE:
            let initialSelected = {
                name: "English",
                code: "en_us",
                path: "en-us",
            }

            let list = newState.languages.filter(item =>
                item.code.split("_")[0] === action.code)
            if (list.length > 0) {
                initialSelected = list[0]
            }

            newState.selected = initialSelected
            break
        case types.SELECT_LANGUAGE:
            newState.selected.name = action.name
            newState.selected.code = action.code
            break
        case types.PATH_LANGUAGE:
            console.log("OPA")
            newState.selected = newState.languages.find(e => e.path === action.path)
            break
        case types.TRANSLATOR_IDENTIFY:
            newState = identifyLanguage(action.code)
            break
        default:
    }

    return newState
}