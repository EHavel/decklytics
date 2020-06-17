import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actions as actionsTranslator } from 'store/ducks/translator'
import Helmet from 'react-helmet'

function Configs() {

    const dispacth = useDispatch()
    const { languagePath } = useParams()

    useEffect(() => {
        dispacth(actionsTranslator.identify(languagePath))
    }, [dispacth])

    return (
        <>
            <Helmet>
                <title>Decklytics: Card gallery for Legends of Runeterra</title>
                <meta name="description" content="Best deck build for Legends of Runeterra. Check your deck or choice actuality metas. Guides and analyzes for beginners and advanced players." />
                <meta name="description"
                    content="Best deck build for Legends of Runeterra. Check your deck or choice actuality metas. Guides and analyzes for beginners and advanced players." />
            </Helmet>
        </>
    )
}

export default Configs