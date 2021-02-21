export const petFinderTokenReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_TOKEN':
            return action.payload

        default:
            return state
    }
}