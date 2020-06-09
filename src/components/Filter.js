import React from 'react'
import { useSelector } from 'react-redux'
import { FilterItem } from 'components'

const Filter = () => {
    const dic = useSelector(state => state.dic)
    const filters = useSelector(state => state.filters)

    const renderFilters = (arr) => arr.map(item => (
        <FilterItem type={item.nameRef} active={item.active}>{item.name}</FilterItem>
    ))

    return (
        <div className="filter">
            <div className="filter-container">
                <h3>{dic.filterByRegion}</h3>
                <div className="filter-content">
                    {renderFilters(filters.regions)}
                </div>
            </div>
            <div className="filter-container">
                <h3>{dic.filterByRarity}</h3>
                <div className="filter-content">
                    {renderFilters(filters.rarities)}
                </div>
            </div>
            <div className="filter-container">
                <h3>{dic.filterByType}</h3>
                <div className="filter-content">
                    <FilterItem></FilterItem>
                    {renderFilters(filters.types)}
                    <FilterItem></FilterItem>
                </div>
            </div>
        </div>
    )
}

export default Filter