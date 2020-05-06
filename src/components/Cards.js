import React from 'react'
import { useSelector } from 'react-redux'

function Cards() {
    const cards = useSelector(state => state.cards)
    const filters = useSelector(state => state.filters)

    const checkRegion = (ref) => {
        let myRegion = filters.regions.find(item => item.nameRef === ref);
        return myRegion.active
    }

    const renderCards = () => {
        return cards.map(item => {
            if (!checkRegion(item.regionRef)) return false

            return renderCard(item)
        })
    }

    const renderCard = (card) => (
        <li key={card.cardCode}>
            <img
                height={320}
                width={212.5}
                loading="lazy"
                alt={card.name}
                src={card.assets[0].gameAbsolutePath} />
        </li>
    )

    return (
        <div className="cards">
            <ul>{renderCards()}</ul>
            {cards.length > 0 && (
                <div className="cards-empty">No cards with this filter</div>
            )}
        </div>
    )
}

export default Cards