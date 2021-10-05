export const GENDER_DATA = "GENDER_DATA";


export const getGender = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/employedetails/gender_details/gender')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: GENDER_DATA,
                    payload: data
                }))
    }
}