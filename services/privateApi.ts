import axios from "axios"
import * as SecureStorage from 'expo-secure-store'
import { CommonHeaderInteceptors } from "../types/axios"

export const privateApi = axios.create({
    baseURL:"http://192.168.0.103:4444"
})

privateApi.interceptors.request.use(async (config) => {
    const token = await SecureStorage.getItemAsync('token')

    console.log('interceptors AAAAAAAAAAAAAAA', token)

    if (token) {
        config.headers = {authorization: token} as CommonHeaderInteceptors

        return config
    }
}, (error) => {
    return Promise.reject(error)
})