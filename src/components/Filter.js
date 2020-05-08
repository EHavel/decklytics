import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import iconFilter from '../assets/icon-filter.png'
import { actions as actionsFilters } from 'store/ducks/filters'
import { FilterItem } from 'components'

const Filter = () => {
    const filters = useSelector(state => state.filters)
    const dispacth = useDispatch()

    const toggleRegionFilter = (name) => {
        dispacth(actionsFilters.toogleRegionFilter(name))
    }

    const allRegionFilter = () => {
        dispacth(actionsFilters.allRegionFilter())
    }

    const renderFilterRegion = () => filters.regions.map(item => {
        let selectedClass = item.active ? 'filter-active' : ''
        return (
            <FilterItem type={item.nameRef}>{item.name}</FilterItem>
            // <div
            //     key={item.nameRef}
            //     onClick={() => toggleRegionFilter(item.nameRef)}
            //     className={`filter-item ${selectedClass}`}>
            //     <img src={iconFilter} alt={item.name} />
            //     <span>{item.name}</span>
            // </div>
        )
    })

    return (
        <div className="filter">
            <div className="filter-container">
                <h3>Filter by region</h3>
                <div className="filter-content">
                    {renderFilterRegion()}
                    <FilterItem type="all">All regions</FilterItem>
                </div>
            </div>
            <div className="filter-container">
                <h3>Filter by rarity</h3>
                <div className="filter-content">
                    <FilterItem type="champion">Champion</FilterItem>
                    <FilterItem type="epic">Epic</FilterItem>
                    <FilterItem type="rare">Rare</FilterItem>
                    <FilterItem type="common">Common</FilterItem>
                </div>
            </div>
            <div className="filter-container">
                <h3>Filter by type</h3>
                <div className="filter-content">
                    <FilterItem></FilterItem>
                    <FilterItem type="units">Units</FilterItem>
                    <FilterItem type="spells">Spells</FilterItem>
                    <FilterItem></FilterItem>
                </div>
            </div>
        </div>
    )
}

export default Filter