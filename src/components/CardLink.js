import React from 'react'
import { Link } from "react-router-dom"

const CardLink = ({ card, basePath }) => (
    <Link className="card" to={`${basePath}/card/${card.cardCode}`}>
        <img
            height={320}
            width={212.5}
            loading="lazy"
            alt={card.name}
            src={card.cardImg} />
    </Link>
)
export default CardLink