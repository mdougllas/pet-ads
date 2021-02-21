import { combineReducers } from 'redux'
import { petFinderTokenReducer } from './petFinderTokenReducer'
import { petsReducer } from './petsReducer'

export default combineReducers({
    petFinderToken: petFinderTokenReducer,
    pets: petsReducer
})