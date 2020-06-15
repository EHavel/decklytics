export const languages = [
    {
        name: "English",
        code: "en_us",
        path: "en-us",
    },
    {
        name: "Português",
        code: "pt_br",
        path: "pt-br",
    },
    {
        name: "Deutsch",
        code: "de_de",
        path: "de-de",
    },
    {
        name: "Español",
        code: "es_es",
        path: "es-es",
    },
    {
        name: "Français",
        code: "fr_fr",
        path: "fr-fr",
    },
    {
        name: "Italiano",
        code: "it_it",
        path: "it-it",
    },
    {
        name: "日本語",
        code: "ja_jp",
        path: "ja-jp",
    },
    {
        name: "繁體中文",
        code: "zh_tw",
        path: "zh-tw",
    },
    {
        name: "한국어",
        code: "ko_kr",
        path: "ko-kr",
    }
]

const identifyLanguage = (c) => {
    let code = c.length > 2 ? c.substr(0, 2) : c

    let defaultLanguage = languages.find(e => e.path.split("-")[0] === code)
    if (!defaultLanguage) defaultLanguage = languages[0]

    return defaultLanguage
}

export default identifyLanguage