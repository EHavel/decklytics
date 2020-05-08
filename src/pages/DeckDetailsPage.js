import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DeckDecoder from 'helpers/lor/DeckEncoder'
import {
    Header,
} from '../components'

const DeckDetailsPage = () => {
    const cards = useSelector(state => state.cards)
    const [deck, setDeck] = useState([])
    const { code } = useParams()

    useEffect(() => {
        let deckDecoded = DeckDecoder.decode(code)
        if (deckDecoded.length > 0 && cards.length > 0) {
            let deck = deckDecoded.map(i => {
                return cards.filter(c => c.cardCode === i.code)[0]
            })
            setDeck(deck)
        }
    }, [cards, code])

    const renderDeck = () => deck.map(item => renderCard(item))

    const renderCard = (item) => (
        <img
            key={item.cardCode}
            height={320}
            width={212.5}
            loading="lazy"
            alt={item.name}
            src={item.assets[0].gameAbsolutePath} />
    )

    return (
        <div className="App">
            <Header />
            {deck.length > 0 && renderDeck()}
        </div>
    )
}
export default DeckDetailsPage