import axios from 'axios'
import { petFinderBase } from '../constants/urls'

export const PetFinderApi = axios.create({
    baseURL: petFinderBase,
    headers: {
        'Content-Type': 'application/json'
    }
})