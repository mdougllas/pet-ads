import axios from 'axios'
import { petAdsBase } from '../constants/urls'

export const GetPetFinderToken = async () => {
    const token = await axios.get(`${ petAdsBase }/token`)
    return token.data.access_token
}
