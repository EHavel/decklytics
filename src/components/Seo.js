import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'

function Seo() {
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

export default Seo