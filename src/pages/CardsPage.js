import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actions as actionsTranslator } from 'store/ducks/translator'
import {
    Header,
    Cards,
    Filter,
} from '../components'

const CardsPage = () => {
    const dispacth = useDispatch()
    const { languagePath } = useParams()
    console.log("languagePath", languagePath)

    useEffect(() => {
        console.log("useEffect", languagePath)
        dispacth(actionsTranslator.identify(languagePath))
    }, [dispacth])

    return (
        <>
            <Header />
            <Cards />
            <Filter />
        </>
    )
}

export default CardsPage