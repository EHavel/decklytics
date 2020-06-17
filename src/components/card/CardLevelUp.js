import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLevelUp } from 'helpers/Utils'
import {
    TitleDivider,
    CardInfo,
} from 'components'

const CardLevelUp = ({ cardCode }) => {
    const [description, setDescription] = useState({})
    const [cardLevelUpCode, setCardLevelUpCode] = useState(null)

    const cards = useSelector(state => state.cards)
    const dic = useSelector(state => state.dic)

    useEffect(() => {
        setCardLevelUpCode(null)
        let mainCard = cards.find(item => item.cardCode === cardCode)
        if (mainCard && mainCard.typeRef === "Unit") {
            setDescription(mainCard.levelupDescription)

            let levelUpCard = cards.find(e => isLevelUp(e, mainCard))
            if (levelUpCard) setCardLevelUpCode(levelUpCard.cardCode)
        }
    }, [cardCode, cards])

    return (
        <>
            {cardLevelUpCode && (
                <>
                    <TitleDivider
                        icon="levelup"
                        subtitle={description}>
                        {dic.levelUp}
                    </TitleDivider>
                    <CardInfo cardCode={cardLevelUpCode} key={cardLevelUpCode} />
                </>
            )}
        </>
    )
}

export default CardLevelUp