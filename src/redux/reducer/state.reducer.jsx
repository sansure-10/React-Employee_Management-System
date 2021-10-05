import { STATE_DATA } from "../action/action.state";



export const statereduser = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case STATE_DATA:
            return  payload;
       
        default:
            return state
    }
}