import React from 'react'
import { strip } from 'helpers/Utils'
import { Icon } from 'components'

const TitleDivider = ({ children, icon, subtitle }) => {
    return (
        <div className="title-divider">
            <span className="divider"></span>
            <div className="title-container">
                <div className="title">
                    <Icon name={icon} />
                    <h3>{children}</h3>
                </div>
                <p>{strip(subtitle)}</p>
            </div>
            <span className="divider"></span>
        </div>
    )
}

export default TitleDivider
