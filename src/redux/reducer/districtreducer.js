
import { DISTRICT_DATA } from "../action/action.district";


export const districtreduser = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case DISTRICT_DATA:
            return  payload;
       
        default:
            return state
    }
}