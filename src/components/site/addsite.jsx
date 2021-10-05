import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addSite } from "../../redux/action/action.site";
import { Button } from 'react-bootstrap';



class AddSite extends React.Component {

    constructor() {
        super()
        this.state = {
            employee_site_no: null,
            site_name: null
        }
    }


    saveData = () => {

        this.props.addsite({ employee_site_no: this.state.employee_site_no, site_name: this.state.site_name })
    }

    render() {
        let { editData } = this.props
        return (
            <div style={{ marginBottom: "600px" }}>
                <br></br>
                <br></br>


                Add Employee SiteNo<input type="text" onChange={(event) => this.setState({ employee_site_no: event.target.value })} />{this.state.employee_site_no} <br />
                <br></br>

                Site Location     <input type="text" onChange={(event) => this.setState({ site_name: event.target.value })} />{this.state.site_name} <br />



                {<Button onClick={this.saveData} variant="success">Save</Button>}
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addsite: bindActionCreators(addSite, dispatch),



    }
}
const mapStateToProps = (state) => {
    return {
        saveData: state.site
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddSite)