import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteEmployee, getDetailsId, getEmployee, getsiteemployee, updateEmployee } from "../../redux/action/action.employee";
import { getSite } from "../../redux/action/action.site";
import { Table,Button } from 'react-bootstrap';


class ViewEmployee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emp_id:""
        }
        this.props.getEmployeeData()
        this.props.getSitedetails()
        this.state = { employee_site_no: 0 }
    }
    editData = (id) => {
        this.data = this.props.EmployeeData[id]
        this.props.updateEmployee(this.data)
        this.props.history.push('/addemployee')
    }
    deleteData = (id) => {
        this.props.deleteEmployee(id);
        setTimeout(() => {
            this.props.getEmployeeData()
        }, 200)


    }
    siteemployee = () => {
        if (this.state.employee_site_no == 0) {
            this.props.getEmployeeData()
        }
        else {
            this.props.getsiteemployee(this.state.employee_site_no)
        }



    }
    getdetailsId=()=>{

        this.props.getdetailsdata(this.state.emp_id)

    }
    render() {

        let { EmployeeData, site } = this.props
        return (
            <div style={{ marginBottom: "350px" }} >

            <br></br>

                Employee Location <select name="site_details" onChange={(event) => this.setState({ employee_site_no: event.target.value })}>
                    <option value="0">all</option>
                    {
                        site.map(res => (
                            <option value={res.employee_site_no} >{res.site_name}</option>
                        ))
                    }

                </select>{this.state.employee_site_no} <Button onClick={() => this.siteemployee()} variant="outline-primary" size="sm">Site Employees</Button>{' '}


                <br></br>


                Employee Id    <input type="text" value={this.state.emp_id} onChange={(event) => this.setState({ emp_id: event.target.value })} />{this.state.emp_id} <Button onClick={this.getdetailsId} variant="outline-primary">Get Data </Button>{' '}





                <Table striped bordered hover variant="dark">
            <thead>

                
                    <br>
                    </br>

                    <br></br>
                    <tr>
                    
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>Employee_Id</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>First_Name</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>Middle_Name</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>Last_Name</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>email</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>Gender</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>Nationality</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>State</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>District</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>Postal_Code</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>Qualification</th>
                        <th style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>Site Name</th>


                    </tr>
                    </thead>
                    <tbody>
                    {
                        EmployeeData.map((res, key) => (
                            <tr>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.emp_id}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.First_Name}</td>



                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.Middle_Name}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.Last_Name}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.email}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.Gender}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.NATIONALITY}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.State}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.district}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.Postal_Code}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.Qualification}</td>
                                <td style={{ height: '25px', borderWidth: "2px", borderColor: "#aaaaaa", borderStyle: 'solid' }}>{res.site_name}</td>

                                <td> <Button onClick={() => this.editData(key)} variant="primary">EDIT</Button>{' '}</td>

                                {<td> <Button onClick={() => this.deleteData(res.emp_id)} variant="danger">DELETE</Button></td>}

                            </tr>



                        ))
                    }
                  </tbody>
                      </Table>


                      </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        EmployeeData: state.employee.employee,
        site: state.site
    }
}
const mapDispactchToProps = (dispatch) => {
    return {
        getEmployeeData: bindActionCreators(getEmployee, dispatch),
        updateEmployee: bindActionCreators(updateEmployee, dispatch),
        deleteEmployee: bindActionCreators(deleteEmployee, dispatch),
        getSitedetails: bindActionCreators(getSite, dispatch),
        getsiteemployee: bindActionCreators(getsiteemployee, dispatch),
        getdetailsdata:bindActionCreators(getDetailsId, dispatch),
    }
}
export default connect(mapStateToProps, mapDispactchToProps)(ViewEmployee)
