export const types = {
    IDENTIFY_LANGUAGE: "IDENTIFY_LANGUAGE",
    SELECT_LANGUAGE: "SELECT_LANGUAGE",
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
    })
}

const INITIAL_STATE = {
    selected: {},
    languages: [
        {
            name: "English",
            code: "en_us",
        },
        {
            name: "Português",
            code: "pt_br",
        },
        {
            name: "Deutsch",
            code: "de_de",
        },
        {
            name: "Español",
            code: "es_es",
        },
        {
            name: "Français",
            code: "fr_fr",
        },
        {
            name: "Italiano",
            code: "it_it",
        },
        {
            name: "日本語",
            code: "ja_jp",
        },
        {
            name: "한국어",
            code: "ko_kr",
        }
    ]
}
export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.IDENTIFY_LANGUAGE:
            let initialSelected = {
                name: "English",
                code: "en_us",
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
        default:
    }

    return newState
}