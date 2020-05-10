import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Icon } from 'components'

const FilterItem = ({ children, type, callback }) => {
    const [active, setActive] = useState(false)

    if (children) {
        return (
            <div
                onClick={() => {
                    setActive(!active)
                }}
                className={`filter-item ${active ? 'filter-active' : ''}`}>
                <Icon name={type} />
                <span>{ReactHtmlParser(children)}</span>
            </div>
        )
    } else {
        return (<div className="filter-item filter-empty"></div>)
    }
}
export default FilterItem