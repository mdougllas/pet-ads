export const petsReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_PETS':
            return action.payload

        default:
            return state
    }
}