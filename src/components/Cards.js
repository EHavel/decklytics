import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CardLink } from 'components'

function Cards() {
    const cards = useSelector(state => state.cards)
    const filters = useSelector(state => state.filters)
    const { language } = useParams()

    const check = (arr, ref) => {
        let found = arr.find(item => item.nameRef === ref)
        return found.active
    }

    const isAllRegions = () => {
        let all = filters.regions.find(item => item.nameRef === 'All')
        if (all.active) return true

        return filters.regions.filter(item => item.active).length === 0
    }

    const isAllRarities = () => {
        return filters.rarities.filter(item => item.active).length === 0
    }

    const isAllTypes = () => {
        return filters.types.filter(item => item.active).length === 0
    }

    const getCardsFiltered = () => {
        if (filters.regions.length === 0) return []

        let allRegions = isAllRegions()
        let allRarities = isAllRarities()
        let allTypes = isAllTypes()

        return cards.filter(item => {
            if (!item.collectible) return false
            if (!allRegions && !check(filters.regions, item.regionRef)) return false
            if (!allRarities && !check(filters.rarities, item.rarityRef)) return false
            if (!allTypes && !check(filters.types, item.typeRef)) return false
            return true
        })
    }

    const renderCards = () => {
        if (cards.length > 0) {
            let listChampion = []
            let listEpic = []
            let listRare = []
            let listCommon = []
            let list = getCardsFiltered()

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
                        finalList.map(item => (<CardLink key={item.cardCode} card={item} basePath={language} />))
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