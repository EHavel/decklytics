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
import PageCards from 'pages/PageCards'
import PageCardDetail from 'pages/PageCardDetail'
import PageNoMatch from 'pages/PageNoMatch'

const Routes = () => {
    const browerlanguage = (navigator.language || navigator.browserLanguage)
    const defaultLanguage = identifyLanguage(browerlanguage)

    return (
        <Router history={History}>
            <Switch>
                <Redirect exact path='/' to={`${defaultLanguage.path}/`} />
                <Route exact path='/:languagePath' component={PageCards} />
                <Route exact path='/:languagePath/card/:cardCode' component={PageCardDetail} />
                {/* <Route from='*' component={PageNoMatch} /> */}
            </Switch>
        </Router>
    )
}

export default Routes