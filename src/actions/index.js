import { GetPetFinderToken } from "../apis/petAds"
import { PetFinderApi } from "../apis/petFinder"

export const fetchToken = () => async dispatch => {
    const token = await GetPetFinderToken()

    dispatch({ type: 'FETCH_TOKEN', payload: token })
}

export const fetchPets = () => async (dispatch, state) => {
    const props = state()
    const token = props.petFinderToken

    if(token){
        const pets = await PetFinderApi.get(
            '/v2/animals?type=cat&location=33309&limit=12&page=2&special_needs=true',
            { headers: { 'Authorization': `Bearer ${ token }` }}
        )
        dispatch({ type: 'FETCH_PETS', payload: pets.data})
    }
}