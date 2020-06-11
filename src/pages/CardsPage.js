import React from 'react'
import Helmet from 'react-helmet'
import {
    Header,
    Cards,
    Filter,
} from '../components'

const CardsPage = () => (
    <>
        <Helmet>
            <title>Decklytics: Cards</title>
        </Helmet>
        <Header />
        <Cards />
        <Filter />
    </>
)

export default CardsPage