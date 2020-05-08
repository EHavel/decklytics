export const types = {
    SET_CARDS: "SET_CARDS",
}

export const actions = {
    setCards: (data) => ({
        type: types.SET_CARDS,
        data: data
    }),
}

const INITIAL_STATE = []

// const handleCards = (data) => {
//     return true
//     // return data.filter(item => item.collectible)
// }

export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.SET_CARDS:
            newState = action.data
            // newState = handleCards(action.data)
            break
        default:
    }

    return newState
}