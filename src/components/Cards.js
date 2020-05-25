import React from 'react'
import { useSelector } from 'react-redux'
import { CardLink } from 'components'

function Cards() {
    const cards = useSelector(state => state.cards)
    const filters = useSelector(state => state.filters)

    const checkRegion = (ref) => {
        let myRegion = filters.regions.find(item => item.nameRef === ref);
        return myRegion.active
    }

    const renderCards = () => {
        if (cards.length > 0) {
            let listChampion = []
            let listEpic = []
            let listRare = []
            let listCommon = []
            let list = cards.filter(item => {
                if (!item.collectible) return false
                // if (!checkRegion(item.regionRef)) return false
                return true
            })

            list.forEach(e => {
                switch (e.rarityRef) {
                    case "Common":
                        listCommon.push(e)
                        break
                    case "Rare":
                        listRare.push(e)
                        break
                    case "Champion":
                        listChampion.push(e)
                        break
                    case "Epic":
                        listEpic.push(e)
                        break
                    default:
                        console.log("Carta sem categoria")
                        break
                }
            })

            let finalList = listChampion.concat(listEpic, listRare, listCommon)

            if (finalList.length > 0) {
                return (
                    <div className="cards-container">{
                        finalList.map(item => (<CardLink key={item.cardCode} card={item} />))
                    }</div>
                )
            } else {
                return (<div className="cards-empty">No cards with this filter</div>)
            }
        }
    }

    return (
        <div className="cards">
            {renderCards()}
        </div>
    )
}

export default Cards