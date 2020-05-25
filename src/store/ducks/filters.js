export const types = {
    SET_REGIONS: "SET_REGIONS",
    SET_RARITIES: "SET_RARITIES",
    SET_TYPES: "SET_TYPES",
    TOOGLE_REGION_FILTER: "TOOGLE_REGION_FILTER",
    ALL_REGION_FILTER: "ALL_REGION_FILTER",
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
    toogleRegionFilter: (name) => ({
        type: types.TOOGLE_REGION_FILTER,
        ref: name,
    }),
    allRegionFilter: () => ({
        type: types.ALL_REGION_FILTER,
    })
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
        case types.TOOGLE_REGION_FILTER:
            newState.regions = newState.regions.map(item => {
                if (item.nameRef === action.ref) {
                    item.active = !item.active
                }
                return item
            })
            break
        case types.ALL_REGION_FILTER:
            newState.regions = newState.regions.map(item => {
                item.active = true
                return item
            })
            break
        default:
    }

    return newState
}

const handleRegions = (data) => data.map(item => {
    return {
        name: item.name,
        nameRef: item.nameRef,
        active: true,
    }
})

const handleRarities = (data) => data.map(item => {
    if (item.nameRef == 'None') return false

    return {
        name: item.name,
        nameRef: item.nameRef,
        active: true,
    }
})

const handleTypes = (data) => data.map(item => {
    return {
        name: item.name,
        nameRef: item.nameRef,
        active: true,
    }
})