import React from 'react'
import { useDispatch } from 'react-redux'
import { strip } from 'helpers/Utils'
import { Icon } from 'components'
import { actions as actionsFilters } from 'store/ducks/filters'

const FilterItem = ({ children, type, active }) => {
    const dispacth = useDispatch()

    const toggleFilter = () => {
        dispacth(actionsFilters.toogleFilter(type))
    }

    if (children) {
        return (
            <div
                onClick={toggleFilter}
                className={`filter-item ${active ? 'filter-active' : ''}`}>
                <Icon name={type} alt={strip(children)} />
                <span>{strip(children)}</span>
            </div>
        )
    } else {
        return (<div className="filter-item filter-empty"></div>)
    }
}
export default FilterItem