export const types = {
    SET_REGIONS: "SET_REGIONS",
    SET_RARITIES: "SET_RARITIES",
    SET_TYPES: "SET_TYPES",
    TOOGLE_FILTER: "TOOGLE_FILTER"
}

export const actions = {
    setRegions: (data) => ({
        type: types.SET_REGIONS,
        data: data,
    }),
    setRarities: (data) => ({
        type: types.SET_RARITIES,
        data: data,
    }),
    setTypes: (data) => ({
        type: types.SET_TYPES,
        data: data,
    }),
    toogleFilter: (type, isActive) => ({
        type: types.TOOGLE_FILTER,
        ref: type,
    }),
}

const INITIAL_STATE = {
    regions: [],
    rarities: [],
    types: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.SET_REGIONS:
            newState.regions = handleRegions(action.data)
            break
        case types.SET_RARITIES:
            newState.rarities = handleRarities(action.data)
            break
        case types.SET_TYPES:
            newState.types = handleTypes(action.data)
            break
        case types.TOOGLE_FILTER:
            let all = newState.regions.find(item => item.nameRef === 'All')
            let found = newState.regions.find(item => item.nameRef === action.ref)

            if (all === found && !found.active) {
                newState.regions = newState.regions.map(item => {
                    item.active = false
                    return item
                })
                found.active = true
            } else {
                found.active = !found.active
                all.active = false
            }

            console.log(newState.regions)
            break
        default:
    }

    return newState
}

const handleRegions = (data) => data.map(item => {
    return {
        name: item.name,
        nameRef: item.nameRef,
        active: false,
    }
})

const handleRarities = (data) => data.filter(item => {
    if (item.nameRef === 'None') return false
    return true
}).map(item => {
    return {
        name: item.name,
        nameRef: item.nameRef,
        active: false,
    }
})

const handleTypes = (data) => data.map(item => {
    return {
        name: item.name,
        nameRef: item.nameRef,
        active: false,
    }
})