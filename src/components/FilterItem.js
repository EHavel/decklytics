import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

import iconAll from 'assets/lor/filters/ic_all.webp'
import iconBilgewater from 'assets/lor/filters/ic_bilgewater.webp'
import iconChampion from 'assets/lor/filters/ic_champion.svg'
import iconDemacia from 'assets/lor/filters/ic_demacia.webp'
import iconFreljord from 'assets/lor/filters/ic_freljord.webp'
import iconIonia from 'assets/lor/filters/ic_ionia.webp'
import iconNoxus from 'assets/lor/filters/ic_noxus.webp'
import iconPiltoverzaun from 'assets/lor/filters/ic_piltoverzaun.webp'
import iconRare from 'assets/lor/filters/ic_rare.svg'
import iconCommon from 'assets/lor/filters/ic_common.svg'
import iconEpic from 'assets/lor/filters/ic_epic.svg'
import iconShadowisles from 'assets/lor/filters/ic_shadowisles.webp'
import iconSpells from 'assets/lor/filters/ic_spells.svg'
import iconUnits from 'assets/lor/filters/ic_units.svg'

const FilterItem = ({ children, type, callback }) => {
    const [active, setActive] = useState(false)

    const renderIcon = () => {
        switch (type) {
            case "Noxus":
                return (<img src={iconNoxus} />)
            case "Demacia":
                return (<img src={iconDemacia} />)
            case "Freljord":
                return (<img src={iconFreljord} />)
            case "ShadowIsles":
                return (<img src={iconShadowisles} />)
            case "Ionia":
                return (<img src={iconIonia} />)
            case "Bilgewater":
                return (<img src={iconBilgewater} />)
            case "PiltoverZaun":
                return (<img src={iconPiltoverzaun} />)
            case "all":
                return (<img src={iconAll} />)
            case "champion":
                return (<img src={iconChampion} />)
            case "epic":
                return (<img src={iconEpic} />)
            case "rare":
                return (<img src={iconRare} />)
            case "common":
                return (<img src={iconCommon} />)
            case "units":
                return (<img src={iconUnits} />)
            case "spells":
                return (<img src={iconSpells} />)
        }
    }

    if (children) {
        return (
            <div
                onClick={() => {
                    setActive(!active)
                }}
                className={`filter-item ${active ? 'filter-active' : ''}`}>
                {renderIcon()}
                <span>{ReactHtmlParser(children)}</span>
            </div>
        )
    } else {
        return (<div className="filter-item filter-empty"></div>)
    }
}
export default FilterItem