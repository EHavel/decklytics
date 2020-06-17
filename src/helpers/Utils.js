
export const strip = (char) => char ? char.replace(/<[^>]*>?/gm, '') : char

export const isLevelUp = (card, mainCard) => {
    if (card.typeRef !== "Unit") return false
    if (card.supertype !== mainCard.supertype) return false
    if (card.collectible) return false
    if (mainCard.associatedCardRefs.indexOf(card.cardCode) === -1) return false

    return true
}