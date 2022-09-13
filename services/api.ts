import axios, {HeadersDefaults} from 'axios'

export interface CommonHeaderProperties extends HeadersDefaults {
    authorization: string;
}

export const api = axios.create({
    baseURL:'http://localhost:4444'
})