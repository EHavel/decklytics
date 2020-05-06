export const types = {
    SET_FILTERS: "SET_FILTERS",
    TOOGLE_REGION_FILTER: "TOOGLE_REGION_FILTER",
    CLEAR_REGION_FILTER: "CLEAR_REGION_FILTER",
}

export const actions = {
    setFilters: (globals) => ({
        type: types.SET_FILTERS,
        globals: globals,
    }),
    toogleRegionFilter: (name) => ({
        type: types.TOOGLE_REGION_FILTER,
        ref: name,
    }),
    clearRegionFilter: () => ({
        type: types.CLEAR_REGION_FILTER,
    })
}

const INITIAL_STATE = {
    regions: []
}

const handleFilters = (globals) => {
    let filters = {}
    filters.regions = globals.regions.map(item => {
        return {
            name: item.name,
            nameRef: item.nameRef,
            icon: item.iconAbsolutePath,
            active: true,
        }
    })
    return filters
}

export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.SET_FILTERS:
            newState = handleFilters(action.globals)
            break
        case types.TOOGLE_REGION_FILTER:
            newState.regions = newState.regions.map(item => {
                if (item.nameRef === action.ref) {
                    item.active = !item.active
                }
                return item
            })
            break
        case types.CLEAR_REGION_FILTER:
            newState.regions = newState.regions.map(item => {
                item.active = false
                return item
            })
            break
        default:
    }

    return newState
}