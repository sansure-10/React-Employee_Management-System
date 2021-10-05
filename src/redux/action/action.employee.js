import axios from 'axios'
export const EDIT_EMPLOYEE="EDIT_EMPLOYE"

export const SET_EMPLOYEE_DATA = "SET_EMPLOYEE_DATA"
export const getEmployee = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/employedetails/inner')

            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_EMPLOYEE_DATA,
                    payload: data
                })


            )
    }
}

export const getsiteemployee = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/employedetails/siteno/${id}`)

            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_EMPLOYEE_DATA,
                    payload: data
                })


            )
    }
}

export const addEmployee = (data) => {





    return (dispatch) => {



        axios.post('http://localhost:4000/employedetails', data).then(response => console.log(response));



    }



}

export const updateEmployee=(data)=>{
    return{
        type:EDIT_EMPLOYEE,
        payload:data
    }
}

export const editEmployee=(data,id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/employedetails/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'PUT',
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>{console.log(response)})
    }
}

export const deleteEmployee=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/employedetails/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(response=>{console.log(response)})
    }
}

export const SET_GET_DATA_ID = "SET_GET_DATA_ID"

export const getDetailsId = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/employedetails/emp/${id}`)
        
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_GET_DATA_ID,
                    payload: data
                })


            )
    }
}
