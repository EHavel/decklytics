import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions as actionsFilters } from 'store/ducks/filters'

const Filter = () => {
    const filters = useSelector(state => state.filters)
    const dispacth = useDispatch()

    const toggleRegionFilter = (name) => {
        dispacth(actionsFilters.toogleRegionFilter(name))
    }

    const renderFilterRegion = () => filters.regions.map(item => {
        let selectedClass = item.active ? 'filter-active' : ''
        return (
            <div
                key={item.nameRef}
                onClick={() => toggleRegionFilter(item.nameRef)}
                className={`filter-item ${selectedClass}`}>
                <img src={item.icon}
                    alt={item.name} />
                {item.name}
            </div>
        )
    })

    return (
        <div className="filter">
            <h2>Filter</h2>
            <div className="filter-container">
                <h3>Region</h3>
                <div className="filter-content">
                    {renderFilterRegion()}
                </div>
            </div>
        </div>
    )
}

export default Filter