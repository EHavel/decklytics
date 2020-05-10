import React from 'react'
import { useSelector } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import {
    TagIcon
} from 'components'

const CardDetails = ({ card }) => {
    const globals = useSelector(state => state.globals)

    const renderKeywords = () => card.keywordRefs.map(item => {
        let myKeyword = globals.keywords.find(keywords => keywords.nameRef === item)
        if (myKeyword) {
            return (
                <>
                    <TagIcon icon={myKeyword.nameRef} name={myKeyword.name} />
                    <p>{ReactHtmlParser(myKeyword.description)}</p>
                </>
            )
        } else { return (<></>) }
    })

    if (card) {
        return (
            <div className="card-details">
                <img src={card.assets[0].gameAbsolutePath} alt={card.name} />
                <div className="details">
                    <h2>{card.name}</h2>
                    <div className="main-tags">
                        <TagIcon icon={card.regionRef} name={card.region} />
                        <TagIcon icon={card.typeRef} name={card.type} />
                        <TagIcon icon={card.rarityRef} name={card.rarity} />
                    </div>
                    <p className="description">{ReactHtmlParser(card.flavorText)}</p>
                    {renderKeywords()}
                </div>
            </div>
        )
    } else { return (<></>) }
}

export default CardDetails