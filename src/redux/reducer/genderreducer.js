
import { GENDER_DATA } from "../action/action.gender";

export const genderreduser = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case GENDER_DATA:
            return  payload;
       
        default:
            return state
    }
}