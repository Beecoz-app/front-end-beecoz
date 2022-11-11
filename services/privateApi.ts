import axios from "axios"

export const privateApi = axios.create({
    baseURL: "http://192.168.0.103:8080"
})