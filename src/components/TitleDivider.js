import React from 'react'
import ReactHtmlParser from 'react-html-parser'
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
                <p>{ReactHtmlParser(subtitle)}</p>
            </div>
            <span className="divider"></span>
        </div>
    )
}

export default TitleDivider
