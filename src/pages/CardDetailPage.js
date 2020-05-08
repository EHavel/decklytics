import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    Header,
    CardLink,
} from 'components'

const CardDetailPage = () => {
    const [associatedCards, setAssociatedCards] = useState([])
    const [card, setCard] = useState(null)
    const cards = useSelector(state => state.cards)
    const { id } = useParams()

    const init = () => {
        let currentCard = filterCards(id)[0]
        if (currentCard) {
            let currentAssociatedCards = filterAssociatedCards(currentCard.associatedCardRefs)
            setAssociatedCards(currentAssociatedCards)

            setCard(currentCard)
        }
    }

    const filterCards = code => cards.filter(item => item.cardCode === code)

    const filterAssociatedCards = associatedCardRefs => cards.filter(item => associatedCardRefs.indexOf(item.cardCode) > -1)

    const renderCards = () => associatedCards.map(item => (<CardLink card={item} />))

    const start = useCallback(init, [cards, id])
    useEffect(() => { start() }, [start])

    return (
        <div className="App">
            <Header />
            {card && (
                <>
                    <p>{card.cardCode}</p>
                    <p>{card.keywords}</p>
                    <img src={card.assets[0].gameAbsolutePath} alt={card.name} />
                    <p>{card.region}</p>
                    <p>{card.regionRef}</p>
                    <p>{card.name}</p>
                    <p>{card.description}</p>
                    <p>{card.levelupDescription}</p>
                    <p>{card.flavorText}</p>
                    <p>{card.associatedCardRefs}</p>
                </>
            )}
            {associatedCards.length}
            {associatedCards.length > 0 && renderCards()}
        </div>
    )
}

export default CardDetailPage