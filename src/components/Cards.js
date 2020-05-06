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
        let list = cards.filter(item => {
            if (!checkRegion(item.regionRef)) return false
            return true
        })

        if (list.length > 0) {
            return (<ul>{list.map(item => renderCard(item))}</ul>)
        } else {
            return (<div className="cards-empty">No cards with this filter</div>)
        }
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
            {renderCards()}
        </div>
    )
}

export default Cards