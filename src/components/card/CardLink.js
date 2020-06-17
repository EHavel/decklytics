import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CardLink = ({ card }) => {
    const { languagePath } = useParams()
    return (
        <Link className="card" to={`/${languagePath}/card/${card.cardCode}`}>
            <img
                height={320}
                width={212.5}
                loading="lazy"
                alt={card.name}
                src={card.cardImg} />
        </Link>
    )
}
export default CardLink