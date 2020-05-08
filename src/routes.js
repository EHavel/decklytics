import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions as actionsTranslator } from 'store/ducks/translator'
import History from 'helpers/History'
import {
    Route,
    Router,
    Switch,
    Redirect,
} from 'react-router-dom'

//Pages
import CardsPage from 'pages/CardsPage'
import CardDetailPage from 'pages/CardDetailPage'
import DeckDetailsPage from 'pages/DeckDetailsPage'

const Routes = () => {
    const dispacth = useDispatch()

    useEffect(() => {
        const browerLanguage = (navigator.language || navigator.browserLanguage)
        dispacth(actionsTranslator.identifyLanguage(browerLanguage))
    }, [dispacth])

    return (
        <Router history={History}>
            <Switch>
                <Route exact path='/cards' component={CardsPage} />
                <Route exact path='/card/:id' component={CardDetailPage} />
                <Route exact path='/deck/:code' component={DeckDetailsPage} />
                <Redirect from='*' to='/cards' />
            </Switch>
        </Router>
    )
}

export default Routes