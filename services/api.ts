import axios, {AxiosRequestHeaders, HeadersDefaults} from 'axios'
import * as SecureStorage from 'expo-secure-store'

export interface CommonHeaderProperties extends HeadersDefaults {
    authorization: string;
}
export interface CommonHeaderInteceptors extends AxiosRequestHeaders {
    authorization: string;
}

export const api = axios.create({
    baseURL:"http://192.168.0.103:4444"
})

export const privateApi = axios.create({
    baseURL:"http://192.168.0.103:4444"
})

privateApi.interceptors.request.use(async (config) => {
    const token = await SecureStorage.getItemAsync('token')

    if (token) {
        config.headers = {authorization: token} as CommonHeaderInteceptors

        return config
    }
}, (error) => {
    return Promise.reject(error)
})
