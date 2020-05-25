export const types = {
    SET_DICTIONARY: "SET_DICTIONARY",
}

export const actions = {
    setDictionary: (dic) => ({
        type: types.SET_DICTIONARY,
        dic: dic,
    }),
}

const INITIAL_STATE = {}

export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.SET_DICTIONARY:
            newState = action.dic
            break
        default:
    }

    return newState
}