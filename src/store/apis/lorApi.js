import axios from "axios"

const api = axios.create({
    baseURL: "../data/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
})

const getConfigUrl = (languageCode) => {
    return languageCode + '/data.json'
}

export const getConfigs = async (code) => {
    return new Promise(async (resolve, reject) => {
        try {
            const config = await api.get(getConfigUrl(code))
            resolve(config.data)
        } catch (error) {
            console.log("Algo deu ruim na API!")
            reject(error.response)
        }
    })
}