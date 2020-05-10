import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    Header,
    CardLink,
    TitleDivider,
    CardDetails,
} from 'components'

const CardDetailPage = () => {
    const [associatedCards, setAssociatedCards] = useState([])
    const [card, setCard] = useState(null)
    const [cardLevelUp, setCardLevelUp] = useState(null)
    const cards = useSelector(state => state.cards)
    const { id } = useParams()

    const init = () => {
        setCardLevelUp(null)
        let currentCard = filterCards(id)[0]
        if (currentCard) {
            let currentCardLevelUp = { ...filterCardLevelUp(currentCard.associatedCardRefs, currentCard.supertype)[0] }

            if (currentCard.rarityRef === "Champion") setCardLevelUp(currentCardLevelUp)

            let currentAssociatedCards = filterAssociatedCards(currentCard.associatedCardRefs, currentCardLevelUp)
            setAssociatedCards(currentAssociatedCards)

            setCard({ ...currentCard })
        }
    }

    const filterCards = code => cards.filter(item => item.cardCode === code)

    const filterCardLevelUp = (associatedCardRefs, supertype) => cards.filter(item => {
        if (item.rarityRef === "Champion") return false
        if (associatedCardRefs.indexOf(item.cardCode) === -1) return false
        if (item.supertype !== supertype) return false
        if (item.typeRef !== "Units") return false
        return true
    })

    const filterAssociatedCards = (associatedCardRefs, cardLevelUp) => cards.filter(item => {
        if (associatedCardRefs.indexOf(item.cardCode) === -1) return false
        if (cardLevelUp && item.cardCode === cardLevelUp.cardCode) return false
        return true
    })

    const renderCards = () => associatedCards.map(item => (<CardLink card={item} />))

    const start = useCallback(init, [cards, id])
    useEffect(() => { start() }, [start])

    return (
        <>
            <Header />
            <div className="page-full">
                <div className="card-details-container">
                    <CardDetails card={card} />
                    {cardLevelUp && (
                        <>
                            <TitleDivider icon="levelup"
                                subtitle={card.levelupDescription}>
                                Subir de nivel
                            </TitleDivider>
                            <CardDetails card={cardLevelUp} />
                        </>
                    )}
                    {associatedCards.length > 0 && (
                        <>
                            <TitleDivider>Cartas associadas</TitleDivider>
                            <div className="card-associated">
                                {renderCards()}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default CardDetailPage