import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Configs,
    Header,
    CardInfo,
    CardLevelUp,
    CardAssociated,
    AdsHorizontalBanner,
} from 'components'

const PageCardDetail = () => {
    const { cardCode } = useParams()

    return (
        <>
            <Configs />
            <Header />
            <div className="page-full">
                <div className="card-details-container">
                    <CardInfo cardCode={cardCode} />
                    <AdsHorizontalBanner />
                    <CardLevelUp cardCode={cardCode} />
                    <CardAssociated cardCode={cardCode} />
                </div>
            </div>
        </>
    )
}

export default PageCardDetail