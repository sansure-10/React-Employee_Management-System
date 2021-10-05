export const DISTRICT_DATA = "DISTRICT_DATA";


export const getDistrict = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/employedetails/district_details/district')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type:DISTRICT_DATA,
                    payload: data
                }))
    }
}