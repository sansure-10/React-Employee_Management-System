import axios from 'axios'
export const SITE_DATA = "SITE_DATA";



export const getSite = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/employedetails/site_details/site')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SITE_DATA,
                    payload: data
                }))
    }
}

export const addSite = (data) => {





    return (dispatch) => {



        axios.post('http://localhost:4000/working_table/addsite',data).then(response =>console.log(response));



    }


}