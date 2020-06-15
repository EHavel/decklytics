import React from 'react'
import identifyLanguage from 'config/languages'
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
import NoMatch from 'pages/NoMatch'

const Routes = () => {
    const browerlanguage = (navigator.language || navigator.browserLanguage)
    const defaultLanguage = identifyLanguage(browerlanguage)

    return (
        <Router history={History}>
            <Switch>
                <Redirect exact path='/' to={`${defaultLanguage.path}/`} />
                <Route path='/:languagePath/' component={CardsPage} />
                {/* <Route path='/:languagePath/card/:id' component={CardDetailPage} />
                <Route from='*' component={NoMatch} /> */}
            </Switch>
        </Router>
    )
}

export default Routes