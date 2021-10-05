export const SET_HISTORY_DATA = "SET_HISTORY_DATA"

export const getHistory = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/working_table/workinghistory')
        
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_HISTORY_DATA,
                    payload: data
                })


            )
    }
}
export const SET_GET_DATA = "SET_GET_DATA"

export const getData = (id,from,to) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/working_table/workinghistory/${id}/${from}/${to}`)
        
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_GET_DATA,
                    payload: data
                })


            )
    }
}
