import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { strip } from 'helpers/Utils'
import {
    TagIcon
} from 'components'

const CardInfo = ({ cardCode }) => {
    const [info, setInfo] = useState(null)

    const cards = useSelector(state => state.cards)
    const dic = useSelector(state => state.dic)

    useEffect(() => {
        setInfo(cards.find(item => item.cardCode === cardCode))
    }, [cardCode, cards])

    const renderKeywords = () => {
        if (info.keywordRefs && dic.keywords) {
            let keywords = dic.keywords.filter(e => info.keywordRefs.indexOf(e.nameRef) >= 0)
            return keywords.map(e => (
                <>
                    <TagIcon icon={e.nameRef} name={e.name} />
                    <p>{strip(e.description)}</p>
                </>
            ))
        }
    }

    if (info) {
        return (
            <div className="card-details">
                <img src={info.cardImg} alt={info.name} />
                <div className="details">
                    <h2>{info.name}</h2>
                    <div className="main-tags">
                        <TagIcon icon={info.regionRef} name={dic[info.regionRef]} />
                        <TagIcon icon={info.typeRef} name={dic[info.typeRef]} />
                        <TagIcon icon={info.rarityRef} name={dic[info.rarityRef]} />
                    </div>
                    <p className="description">{strip(info.flavorText)}</p>
                    {renderKeywords()}
                </div>
            </div>
        )
    } else { return (<></>) }
}

export default CardInfo