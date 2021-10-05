

import { NATIONALITY_DATA } from "../action/action.nationality";


export const nationalityreduser = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case NATIONALITY_DATA:
            return  payload;
       
        default:
            return state
    }
}