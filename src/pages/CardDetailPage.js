import React, { useState, useEffect, useCallback } from 'react'
import Helmet from 'react-helmet'
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
    const dic = useSelector(state => state.dic)
    const cards = useSelector(state => state.cards)
    const { id } = useParams()
    let levelUpFound = false

    const init = () => {
        console.log("init -----------------------")
        // console.log("init -----------------------", cards, id)
        setCardLevelUp(null)
        if (cards.length > 0) {
            let currentCard = filterMainCards(id)[0]
            console.log(currentCard)
            console.log(cardLevelUp)

            if (currentCard) {
                if (!levelUpFound) filterCardLevelUp(currentCard.associatedCardRefs, currentCard.supertype)
                filterAssociatedCards(currentCard.associatedCardRefs, cardLevelUp)
                setCard({ ...currentCard })
            }
        }
    }

    const filterMainCards = code => cards.filter(item => item.cardCode === code)

    const filterCardLevelUp = (associatedCardRefs, supertype) => {
        for (let i = 0; i < cards.length; i++) {
            var item = cards[i]
            if (item.typeRef !== "Unit") continue
            if (item.supertype !== supertype) continue
            if (associatedCardRefs.indexOf(item.cardCode) === -1) continue
            levelUpFound = true
            setCardLevelUp({ ...item })
            break
        }
    }

    const filterAssociatedCards = (associatedCardRefs, cardLevelUp) => {
        let cardsFiltered = cards.filter(item => {
            if (associatedCardRefs.indexOf(item.cardCode) === -1) return false
            if (cardLevelUp && item.cardCode === cardLevelUp.cardCode) return false
            return true
        })
        console.log("cardsFiltered", cardsFiltered)
        setAssociatedCards(cardsFiltered)
    }

    const renderCards = () => associatedCards.map(item => (<CardLink card={item} key={item.cardCode} />))

    const start = useCallback(init, [cards, id])
    useEffect(() => { start() }, [start])

    return (
        <>
            <Helmet>
                <title>Decklytics: Cards Details</title>
            </Helmet>
            <Header />
            <div className="page-full">
                <div className="card-details-container">
                    {card && (
                        <CardDetails card={card} key={card.cardCode} />
                    )}
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <ins className="adsbygoogle"
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-5888402531823458"
                        data-ad-slot="5737051106"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                    {cardLevelUp && (
                        <>
                            <TitleDivider icon="levelup"
                                subtitle={card.levelupDescription}>
                                {dic.levelUp}
                            </TitleDivider>
                            <CardDetails card={cardLevelUp} key={cardLevelUp.cardCode} />
                        </>
                    )}
                    {associatedCards.length > 0 && (
                        <>
                            <TitleDivider>{dic.associatedCards}</TitleDivider>
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