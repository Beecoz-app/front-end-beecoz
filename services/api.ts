import axios, {HeadersDefaults} from 'axios'

export interface CommonHeaderProperties extends HeadersDefaults {
    authorization: string;
}

export const api = axios.create({
    baseURL:"http://192.168.0.103:4444"
})