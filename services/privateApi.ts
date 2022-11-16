import axios from "axios"

export const privateApi = axios.create({
    baseURL: "https://beecoz-api-api.herokuapp.com"
})