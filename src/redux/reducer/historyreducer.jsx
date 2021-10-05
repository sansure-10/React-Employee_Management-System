import { SET_GET_DATA, SET_HISTORY_DATA } from "../action/action.history"




export const historyReduser=(state=[],action)=>{
    let {type,payload}=action
    switch (type){
        case SET_HISTORY_DATA:
        return payload
        case SET_GET_DATA:
            return payload
        default:
            return state
    }
}