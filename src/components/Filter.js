import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import iconFilter from '../assets/icon-filter.png'
import { actions as actionsFilters } from 'store/ducks/filters'
import { FilterItem } from 'components'

const Filter = () => {
    const dic = useSelector(state => state.dic)
    const filters = useSelector(state => state.filters)
    const dispacth = useDispatch()

    const toggleRegionFilter = (name) => {
        dispacth(actionsFilters.toogleRegionFilter(name))
    }

    const allRegionFilter = () => {
        dispacth(actionsFilters.allRegionFilter())
    }

    const renderFilterRegion = () => filters.regions.map(item => (
        <FilterItem type={item.nameRef}>{item.name}</FilterItem>
    ))

    const renderFilterRarity = () => filters.rarities.map(item => (
        <FilterItem type={item.nameRef}>{item.name}</FilterItem>
    ))

    const renderFilterType = () => filters.types.map(item => (
        <FilterItem type={item.nameRef}>{item.name}</FilterItem>
    ))

    return (
        <div className="filter">
            <div className="filter-container">
                <h3>{dic.filterByRegion}</h3>
                <div className="filter-content">
                    {renderFilterRegion()}
                    <FilterItem type="all">{dic.allRegions}</FilterItem>
                </div>
            </div>
            <div className="filter-container">
                <h3>{dic.filterByRarity}</h3>
                <div className="filter-content">
                    {renderFilterRarity()}
                </div>
            </div>
            <div className="filter-container">
                <h3>{dic.filterByType}</h3>
                <div className="filter-content">
                    <FilterItem></FilterItem>
                    {renderFilterType()}
                    <FilterItem></FilterItem>
                </div>
            </div>
        </div>
    )
}

export default Filter