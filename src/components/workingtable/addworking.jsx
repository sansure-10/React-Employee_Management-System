import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import { addWorking, editWorking, updateWorking } from "../../redux/action/action.working";
import { Button } from 'react-bootstrap';
import { getSite } from "../../redux/action/action.site";

class AddWorking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emp_id: this.props.editData.emp_id ? this.props.editData.emp_id : null,
            From_date: this.props.editData.From_date ? this.props.editData.From_date : null,
            to_date: this.props.editData.to_date ? this.props.editData.to_date : null,
            monthly_sallary: this.props.editData.monthly_sallary ? this.props.editData.monthly_sallary : null,
            employe_site_no: this.props.editData.employe_site_no ? this.props.editData.employe_site_no : null
        }

        this.props.getSitedetails()
    }
    editData = () => {
        this.props.editWorking(this.state, this.props.editData.emp_id)
        this.props.updateWorking({})
        this.props.history.push('/viewworking')
    }


    saveData = () => {

        this.props.addworking({ emp_id: this.state.emp_id, From_date: this.state.From_date, to_date: this.state.to_date, monthly_sallary: this.state.monthly_sallary, employe_site_no: this.state.employe_site_no })
    }

    render() {
        let { editData } = this.props
        let { site } = this.props
        return (

            
            <div style={{ marginBottom: "500px" }} >
                
            <br></br>
                Add Employee Id <input type="text" value={this.state.emp_id} onChange={(event) => this.setState({ emp_id: event.target.value })} />{this.state.emp_id} <br />

                <br></br>
                From Date  <input type="date" value={this.state.From_date} onChange={(event) => this.setState({ From_date: event.target.value })} />{this.state.From_date} <br />
                <br></br>
                To Date        <input type="date" value={this.state.to_date} onChange={(event) => this.setState({ to_date: event.target.value })} />{this.state.to_date}<br />

                <br></br>
                Monthly sallary <input type="text" value={this.state.monthly_sallary} onChange={(event) => this.setState({ monthly_sallary: event.target.value })} />{this.state.monthly_sallary}<br />

                <br></br>
                Employee site no<select name="site_details" onChange={(event) => this.setState({ employe_site_no: event.target.value })}>

                    {
                        site.map(res => (
                            <option value={res.employee_site_no} >{res.site_name}</option>
                        ))
                    }

                </select>{this.state.employee_site_no}<br />
                <br></br>


                <br></br>
                <br></br>

                {editData.emp_id ? <Button onClick={this.editData} variant="success">Update</Button> : <Button onClick={this.saveData} variant="success">Save</Button>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addworking: bindActionCreators(addWorking, dispatch),
        editWorking: bindActionCreators(editWorking, dispatch),
        updateWorking: bindActionCreators(updateWorking, dispatch),
        getSitedetails: bindActionCreators(getSite, dispatch),


    }
}
const mapStateToProps = (state) => {
    return {
        editData: state.working.editData,
        site: state.site,
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddWorking)
