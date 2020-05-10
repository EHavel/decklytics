import axios from "axios"

const api = axios.create({
    baseURL: "../data/lor/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
})

const getCardsSet1Url = (languageCode) => {
    return languageCode + '/set1-' + languageCode + '.json'
}

const getCardsSet2Url = (languageCode) => {
    return languageCode + '/set2-' + languageCode + '.json'
}

const getGlobalsUrl = (languageCode) => {
    return languageCode + '/globals-' + languageCode + '.json'
}

export const getAllCards = async (code) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = []

            const set1 = await api.get(getCardsSet1Url(code))
            set1.data.forEach(item => {
                response.push(item)
            })

            const set2 = await api.get(getCardsSet2Url(code))
            set2.data.forEach(item => {
                response.push(item)
            })

            resolve(response)
        } catch (error) {
            console.log("Algo deu ruim na API!")
            reject(error.response)
        }
    })
}

export const getGlobals = async (code) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get(getGlobalsUrl(code))
            resolve(response.data)
        } catch (error) {
            console.log("Algo deu ruim na API!")
            reject(error.response)
        }
    })
}