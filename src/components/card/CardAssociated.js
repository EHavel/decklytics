import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLevelUp } from 'helpers/Utils'
import {
    CardLink,
    TitleDivider,
} from 'components'

const CardAssociated = ({ cardCode }) => {
    const [associatedCards, setAssociatedCards] = useState([])

    const cards = useSelector(state => state.cards)
    const dic = useSelector(state => state.dic)

    useEffect(() => {
        let found = cards.find(e => e.cardCode === cardCode)
        let associatedCards = cards.filter(e => found.associatedCardRefs.indexOf(e.cardCode) !== -1)
        setAssociatedCards(associatedCards)
    }, [cardCode, cards])

    const renderCards = () => associatedCards.map(item => (<CardLink card={item} key={item.cardCode} />))

    return (
        <>
            {associatedCards.length > 0 && (
                <>
                    <TitleDivider>{dic.associatedCards}</TitleDivider>
                    <div className="card-associated">
                        {renderCards()}
                    </div>
                </>
            )}
        </>
    )
}

export default CardAssociated