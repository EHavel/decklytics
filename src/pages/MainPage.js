import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions as actionsTranslator } from 'store/ducks/translator'
import {
    Header,
    Cards,
    Filter,
} from '../components'

const MainPage = () => {
    const dispacth = useDispatch()

    useEffect(() => {
        const browerLanguage = (navigator.language || navigator.browserLanguage)
        dispacth(actionsTranslator.identifyLanguage(browerLanguage))
    }, [dispacth])

    return (
        <>
            <Header />
            <Cards />
            <Filter />
        </>
    )
}

export default MainPage