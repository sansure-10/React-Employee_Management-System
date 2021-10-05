export const NATIONALITY_DATA = "NATIONALITY_DATA";


export const getNationality = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/employedetails/nationality_details/nation')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type:NATIONALITY_DATA,
                    payload: data
                }))
    }
}