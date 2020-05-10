import React from 'react'
import { Link } from "react-router-dom"

const CardLink = ({ card }) => (
    <Link className="card" to={`/card/${card.cardCode}`}>
        <img
            height={320}
            width={212.5}
            loading="lazy"
            alt={card.name}
            src={card.assets[0].gameAbsolutePath} />
    </Link>
)
export default CardLink