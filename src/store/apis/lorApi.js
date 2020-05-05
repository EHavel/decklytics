import axios from "axios"

const api = axios.create({
    baseURL: "../data/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
})

const getCardsUrl = (languageCode) => {
    return 'set1-' + languageCode + '.json'
}

const getGlobalsUrl = (languageCode) => {
    return 'globals-' + languageCode + '.json'
}

export const getAllCards = async (code) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get(getCardsUrl(code))
            resolve(response.data)
        } catch (error) {
            console.log("Algo deu ruim na API!")
            reject(error.response)
        }
    })
}

export const getAllFilters = async (code) => {
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