import React from 'react'
// Icons
import iconAll from 'assets/lor/icons/ic_all.webp'
import iconBilgewater from 'assets/lor/icons/ic_bilgewater.webp'
import iconChampion from 'assets/lor/icons/ic_champion.svg'
import iconDemacia from 'assets/lor/icons/ic_demacia.webp'
import iconFreljord from 'assets/lor/icons/ic_freljord.webp'
import iconIonia from 'assets/lor/icons/ic_ionia.webp'
import iconNoxus from 'assets/lor/icons/ic_noxus.webp'
import iconPiltoverzaun from 'assets/lor/icons/ic_piltoverzaun.webp'
import iconRare from 'assets/lor/icons/ic_rare.svg'
import iconCommon from 'assets/lor/icons/ic_common.svg'
import iconEpic from 'assets/lor/icons/ic_epic.svg'
import iconShadowisles from 'assets/lor/icons/ic_shadowisles.webp'
import iconSpells from 'assets/lor/icons/ic_spells.svg'
import iconUnits from 'assets/lor/icons/ic_units.svg'
import iconSlow from 'assets/lor/icons/ic_slow.png'
import iconBurst from 'assets/lor/icons/ic_burst.png'
import iconFast from 'assets/lor/icons/ic_fast.png'
import iconObliterate from 'assets/lor/icons/ic_obliterate.png'
import iconSkill from 'assets/lor/icons/ic_skill.png'
import iconDoubleStrike from 'assets/lor/icons/ic_doublestrike.png'
import iconWeakest from 'assets/lor/icons/ic_weakest.png'
import iconVulnerable from 'assets/lor/icons/ic_vulnerable.png'
import iconAttackSkillMark from 'assets/lor/icons/ic_attackskillmark.png'
import iconElusive from 'assets/lor/icons/ic_elusive.png'
import iconDrain from 'assets/lor/icons/ic_drain.png'
import iconStun from 'assets/lor/icons/ic_stun.png'
import iconAutoplay from 'assets/lor/icons/ic_autoplay.png'
import iconSpellOverwhelm from 'assets/lor/icons/ic_spelloverwhelm.png'
import iconAttune from 'assets/lor/icons/ic_attune.png'
import iconBarrier from 'assets/lor/icons/ic_barrier.png'
import iconImmobile from 'assets/lor/icons/ic_immobile.png'
import iconCapture from 'assets/lor/icons/ic_capture.png'
import iconFrostbite from 'assets/lor/icons/ic_frostbite.png'
import iconFleeting from 'assets/lor/icons/ic_fleeting.png'
import iconOverwhelm from 'assets/lor/icons/ic_overwhelm.png'
import iconPlaySkillMark from 'assets/lor/icons/ic_playskillmark.png'
import iconQuickStrike from 'assets/lor/icons/ic_quickstrike.png'
import iconTough from 'assets/lor/icons/ic_tough.png'
import iconRecall from 'assets/lor/icons/ic_recall.png'
import iconRegeneration from 'assets/lor/icons/ic_regeneration.png'
import iconSilenced from 'assets/lor/icons/ic_silenced.png'
import iconLifesteal from 'assets/lor/icons/ic_lifesteal.png'
import iconEnlightened from 'assets/lor/icons/ic_enlightened.png'
import iconLevelUp from 'assets/lor/icons/ic_levelup.png'
import iconScout from 'assets/lor/icons/ic_scout.png'
import iconEphemeral from 'assets/lor/icons/ic_ephemeral.png'
import iconLastBreath from 'assets/lor/icons/ic_lastbreath.png'
import iconChallenger from 'assets/lor/icons/ic_challenger.png'
import iconImbue from 'assets/lor/icons/ic_imbue.png'
import iconFearsome from 'assets/lor/icons/ic_fearsome.png'
import iconCantBlock from 'assets/lor/icons/ic_cantblock.png'
import iconDeep from 'assets/lor/icons/ic_deep.png'

const Icon = ({ name, alt }) => {

    const getSrc = () => {
        let ref = String(name).toLowerCase()
        switch (ref) {
            case "noxus":
                return iconNoxus
            case "demacia":
                return iconDemacia
            case "freljord":
                return iconFreljord
            case "shadowisles":
                return iconShadowisles
            case "ionia":
                return iconIonia
            case "bilgewater":
                return iconBilgewater
            case "piltoverzaun":
                return iconPiltoverzaun
            case "all":
                return iconAll
            case "champion":
                return iconChampion
            case "epic":
                return iconEpic
            case "rare":
                return iconRare
            case "common":
                return iconCommon
            case "unit":
                return iconUnits
            case "spell":
                return iconSpells
            case "slow":
                return iconSlow
            case "burst":
                return iconBurst
            case "fast":
                return iconFast
            case "obliterate":
                return iconObliterate
            case "skill":
                return iconSkill
            case "doublestrike":
                return iconDoubleStrike
            case "weakest":
                return iconWeakest
            case "vulnerable":
                return iconVulnerable
            case "attackskillmark":
                return iconAttackSkillMark
            case "elusive":
                return iconElusive
            case "drain":
                return iconDrain
            case "stun":
                return iconStun
            case "autoplay":
                return iconAutoplay
            case "spelloverwhelm":
                return iconSpellOverwhelm
            case "attune":
                return iconAttune
            case "barrier":
                return iconBarrier
            case "immobile":
                return iconImmobile
            case "capture":
                return iconCapture
            case "frostbite":
                return iconFrostbite
            case "fleeting":
                return iconFleeting
            case "overwhelm":
                return iconOverwhelm
            case "playskillmark":
                return iconPlaySkillMark
            case "quickstrike":
                return iconQuickStrike
            case "tough":
                return iconTough
            case "recall":
                return iconRecall
            case "regeneration":
                return iconRegeneration
            case "silenced":
                return iconSilenced
            case "lifesteal":
                return iconLifesteal
            case "enlightened":
                return iconEnlightened
            case "levelup":
                return iconLevelUp
            case "scout":
                return iconScout
            case "ephemeral":
                return iconEphemeral
            case "lastbreath":
                return iconLastBreath
            case "challenger":
                return iconChallenger
            case "imbue":
                return iconImbue
            case "fearsome":
                return iconFearsome
            case "cantblock":
                return iconCantBlock
            case "deep":
                return iconDeep
            default:
                return ""
        }
    }

    return (<img src={getSrc()} alt={alt} />)
}
export default Icon