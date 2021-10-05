import { EDIT_EMPLOYEE, SET_EMPLOYEE_DATA, SET_GET_DATA_ID } from "../action/action.employee"


export const employeeReduser=(state={employee:[],editData:{}},action)=>{
    let{type,payload}=action;
    switch(type){
        case SET_EMPLOYEE_DATA:
            return {...state,employee:payload};
        case EDIT_EMPLOYEE:
            console.log(state.editData)
            return{...state,editData:payload}

            case SET_GET_DATA_ID :
                return {...state,employee:payload};
        default:
            return state
    }
}