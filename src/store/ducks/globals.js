export const types = {
    SET_GLOBALS: "SET_GLOBALS",
}

export const actions = {
    setGlobals: (data) => ({
        type: types.SET_GLOBALS,
        data: data
    }),
}

const INITIAL_STATE = {}
export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.SET_GLOBALS:
            newState = action.data
            break
        default:
    }

    return newState
}