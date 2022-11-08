import axios from "axios"
import * as SecureStorage from 'expo-secure-store'
import { CommonHeaderInteceptors } from "../types/axios"

export const privateApi = axios.create({
    baseURL:"http://192.168.0.103:8080"
})