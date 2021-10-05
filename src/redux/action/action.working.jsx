import axios from 'axios'
export const EDIT_WORKING="EDIT_WORKING"
export const SET_WORKING_DATA = "SET_EMPLOYEE_DATA"
export const getWorking = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/working_table/inn')
        
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_WORKING_DATA,
                    payload: data
                })


            )
    }
}


export const addWorking = (data) => {





    return (dispatch) => {



        axios.post('http://localhost:4000/working_table',data).then(response =>console.log(response));



    }


}

export const updateWorking=(data)=>{
    return{
        type:EDIT_WORKING,
        payload:data
    }
}

export const editWorking=(data,emp_id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/working_table/${emp_id}`,{
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
export const deleteWorking=(emp_id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/working_table/${emp_id}`,{
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