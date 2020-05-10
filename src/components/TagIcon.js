import React from 'react'
import { Icon } from 'components'

const TagIcon = ({ icon, name }) => {
    if (icon === "None") return (<></>)

    return (
        <div className="tag-icon">
            <Icon name={icon} />
            <h4>{name}</h4>
        </div>
    )
}

export default TagIcon