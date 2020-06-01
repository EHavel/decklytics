export const types = {
    SET_DICTIONARY: "SET_DICTIONARY",
    SET_KEYWORDS: "SET_KEYWORDS",
}

export const actions = {
    setDictionary: (dic) => ({
        type: types.SET_DICTIONARY,
        dic: dic,
    }),
    setKeywords: (keywords) => ({
        type: types.SET_KEYWORDS,
        keywords: keywords,
    }),
}

const INITIAL_STATE = {}

export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    console.log("action:", action)
    switch (action.type) {
        case types.SET_DICTIONARY:
            newState = action.dic
            break
        case types.SET_KEYWORDS:
            console.log("action.keywords", action.keywords)
            newState.keywords = action.keywords
            break
        default:
    }

    return newState
}