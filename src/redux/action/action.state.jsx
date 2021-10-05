export const STATE_DATA = "STATE_DATA";


export const getState = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/employedetails//state_details/state')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type:STATE_DATA,
                    payload: data
                }))
    }
}