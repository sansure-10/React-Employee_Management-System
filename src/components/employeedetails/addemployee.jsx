import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { getDistrict } from "../../redux/action/action.district";
import { addEmployee, editEmployee, updateEmployee } from "../../redux/action/action.employee";
import { getGender } from "../../redux/action/action.gender";
import { getNationality } from "../../redux/action/action.nationality";
import { getSite } from "../../redux/action/action.site";
import { getState } from "../../redux/action/action.state";
import { Button } from 'react-bootstrap';

class AddEmployee extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emp_id: this.props.editData.emp_id ? this.props.editData.emp_id : null,
            First_Name: this.props.editData.First_Name ? this.props.editData.First_Name : "",
            Middle_Name:this.props.editData.Middle_Name ? this.props.editData.Middle_Name : "",
            Last_Name: this.props.editData.Last_Name ? this.props.editData.Last_Name : "",
            email: this.props.editData.email ? this.props.editData.email : "",
            Gender: this.props.editData.Gender ? this.props.editData.Gender : "",
            Nationality: this.props.editData.Nationality ? this.props.editData.Nationality : null,
            State: this.props.editData.State ? this.props.editData.State : null,
            District: this.props.editData.District ? this.props.editData.District : null,
            Postal_Code: this.props.editData.Postal_Code ? this.props.editData.Postal_Code : null,
            Qualification: this.props.editData.Qualification ? this.props.editData.Qualification : "",
            employee_site_no: this.props.editData.employee_site_no ? this.props.editData.employee_site_no : null
        }
        this.props.getGendertype()
        this.props.getDistricttype()
        this.props.getSitedetails()
        this.props.getstatedetails()
        this.props.getnationalitydetails()
    }

    saveData = () => {

        this.props.addemployee({ emp_id: this.state.emp_id, First_Name: this.state.First_Name,Middle_Name:this.state.Middle_Name, Last_Name: this.state.Last_Name, email: this.state.email, Gender: this.state.Gender, Nationality: this.state.Nationality, State: this.state.State, District: this.state.District, Postal_Code: this.state.Postal_Code, Qualification: this.state.Qualification, employee_site_no: this.state.employee_site_no })
    }

    editData = () => {
        this.props.editEmployee(this.state, this.props.editData.emp_id)
        this.props.updateEmployee({})
        this.props.history.push('/viewemployee')
    }


    render() {
        let { editData } = this.props
        let { gender } = this.props
        let { district } = this.props
        let { site } = this.props
        let { state } = this.props
        let { nationality } = this.props

        return (
            <div style={{ marginBottom: "200px" }}>
                <br></br>
                Add Employee Id<input type="text" value={this.state.emp_id} onChange={(event) => this.setState({ emp_id: event.target.value })} />{this.state.emp_id} <br />
                <br></br>

                Add First Name<input type="text" value={this.state.First_Name} onChange={(event) => this.setState({ First_Name: event.target.value })} />{this.state.First_Name} <br />
                <br></br>

                Add Middle Name<input type="text" value={this.state.Middle_Name} onChange={(event) => this.setState({ Middle_Name: event.target.value })} />{this.state.Middle_Name} <br />
                <br></br>
                Add Last Name <input type="text" value={this.state.Last_Name} onChange={(event) => this.setState({ Last_Name: event.target.value })} />{this.state.Last_Name}<br />

                <br></br>
                Email <input type="text" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />{this.state.email}<br />

                <br></br>
                Gender <select name="gender_details" onChange={(event) => this.setState({ Gender: event.target.value })}>

                    {
                        gender.map(res => (
                            <option value={res.GENDER_KEY} >{res.Gender}</option>
                        ))
                    }

                </select>{this.state.GENDER_KEY}<br />

                <br></br>
                Nationality<select name="nationality_details" onChange={(event) => this.setState({ Nationality: event.target.value })}>

                    {
                        nationality.map(res => (
                            <option value={res.NATIONALITY_NO} >{res.NATIONALITY}</option>
                        ))
                    }

                </select>{this.state.NATIONALITY_NO}<br />
                <br></br>
                State <select name="state_details" onChange={(event) => this.setState({ State: event.target.value })}>

                    {
                        state.map(res => (
                            <option value={res.state_no} >{res.State}</option>
                        ))
                    }

                </select>{this.state.state_no}<br />

                <br></br>
                District <select name="district_details" onChange={(event) => this.setState({ District: event.target.value })}>

                    {
                        district.map(res => (
                            <option value={res.district_no} >{res.district}</option>
                        ))
                    }

                </select>{this.state.district_no}<br />

                <br></br>
                Postal_Code <input type="text" value={this.state.Postal_Code} onChange={(event) => this.setState({ Postal_Code: event.target.value })} />{this.state.Postal_Code}<br />
                <br></br>

                Qualification<input type="text" value={this.state.Qualification} onChange={(event) => this.setState({ Qualification: event.target.value })} />{this.state.Qualification}<br />
                <br></br>

                Site<select name="site_details" onChange={(event) => this.setState({ employee_site_no: event.target.value })}>

                    {
                        site.map(res => (
                            <option value={res.employee_site_no} >{res.site_name}</option>
                        ))
                    }

                </select>{this.state.employee_site_no}<br />
                <br></br>

                {editData.emp_id ? <Button onClick={this.editData} variant="success">Update</Button> : <Button onClick={this.saveData} variant="success">Save</Button>}

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addemployee: bindActionCreators(addEmployee, dispatch),
        editEmployee: bindActionCreators(editEmployee, dispatch),
        updateEmployee: bindActionCreators(updateEmployee, dispatch),
        getGendertype: bindActionCreators(getGender, dispatch),
        getDistricttype: bindActionCreators(getDistrict, dispatch),
        getSitedetails: bindActionCreators(getSite, dispatch),
        getstatedetails: bindActionCreators(getState, dispatch),
        getnationalitydetails: bindActionCreators(getNationality, dispatch),



    }
}
const mapStateToProps = (state) => {
    return {
        editData: state.employee.editData,
        gender: state.gender,
        district: state.district,
        site: state.site,
        state: state.state,
        nationality: state.nationality

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)
