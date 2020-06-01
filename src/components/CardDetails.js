import React from 'react'
import { useSelector } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import {
    TagIcon
} from 'components'

const CardDetails = ({ card }) => {
    const dic = useSelector(state => state.dic)

    // const renderKeywords = () => card.keywordRefs.map(item => {
    //     console.log("dic", dic, item)
    //     let myKeyword = dic.keywords.find(keywords => keywords.nameRef === item)
    //     if (myKeyword) {
    //         return (
    //             <>
    //                 <TagIcon icon={myKeyword.nameRef} name={myKeyword.name} />
    //                 <p>{ReactHtmlParser(myKeyword.description)}</p>
    //             </>
    //         )
    //     } else { return (<></>) }
    // })

    if (card) {
        return (
            <div className="card-details">
                <img src={card.cardImg} alt={card.name} />
                <div className="details">
                    <h2>{card.name}</h2>
                    <div className="main-tags">
                        <TagIcon icon={card.regionRef} name={dic[card.regionRef]} />
                        <TagIcon icon={card.typeRef} name={dic[card.typeRef]} />
                        <TagIcon icon={card.rarityRef} name={dic[card.rarityRef]} />
                    </div>
                    <p className="description">{ReactHtmlParser(card.flavorText)}</p>
                    {/* {renderKeywords()} */}
                </div>
            </div>
        )
    } else { return (<></>) }
}

export default CardDetails