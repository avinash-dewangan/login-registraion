import { ADD_PASSCAT, FETCH_PASSCAT } from './types'
const axios = require('axios');


export const addPassCate = (category) => {
    return {
        type: ADD_PASSCAT,
        payload: category
    }

}

export const fetchPassCate = (allCategories) => {
    return {
        type: FETCH_PASSCAT,
        payload: allCategories
    }
}

export const getPassCat = () => {

}