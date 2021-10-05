import { EDIT_WORKING, SET_WORKING_DATA } from "../action/action.working"


export const workingReduser=(state={working:[],editData:{}},action)=>{
    let{type,payload}=action;
    switch(type){
        case SET_WORKING_DATA:
            return {...state,working:payload};
        case EDIT_WORKING:
            console.log(state.editData)
            return{...state,editData:payload}
        default:
            return state
    }
}