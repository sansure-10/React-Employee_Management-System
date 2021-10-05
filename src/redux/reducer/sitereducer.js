

import { SITE_DATA } from "../action/action.site";

export const sitereduser = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SITE_DATA:
            return  payload;
       
        default:
            return state
    }
}