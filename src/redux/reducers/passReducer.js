import { ADD_PASSCAT, FETCH_PASSCAT } from './types'

const initialState = {
    category: '',
    allCategories: []
}

const passReducer = (state = initialState, action){
    switch (action.type) {
        case ADD_PASSCAT: return {
            ...state,
            category: action.payload
        }
        case FETCH_PASSCAT: return {
            ...state,
            allCategories: action.payload
        }
        default: return state;
    }
}


export default passReducer;