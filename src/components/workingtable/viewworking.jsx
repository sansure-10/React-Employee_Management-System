import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteWorking, getWorking, updateWorking } from "../../redux/action/action.working";
import { Table,Button } from 'react-bootstrap';




class ViewWorking extends React.Component {
    constructor(props) {
        super(props)
         this.state = {From_date: new Date()}
        this.props.getWorkingData()
    }
    editData=(id)=>{
        this.data=this.props.WorkingData[id]
        this.props.updateWorking(this.data)
        this.props.history.push('/addworking')
    }
    deleteData=(id)=>{
        this.props.deleteWorking(id);
        setTimeout(()=>{
            this.props.getWorkingData()
        },200)
       
        
    }

    render() {
        let { WorkingData } = this.props
        return (
            <div style={{ marginBottom: "350px" }}>
            <br></br>
            
            <br></br>



            <Table striped bordered hover variant="dark">
            <thead>
               

                
                    <tr>
                        <th BGCOLOR="white" style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>Employee Id</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>From Date</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>To Date</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>Monthly Sallary</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>Site Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        WorkingData.map((res,key) => (
                            <tr>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.emp_id}</td>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.From_date}</td>
                                
                                
                                
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.to_date}</td>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.monthly_sallary}</td>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.site_name}</td>

                                
                                <td> <Button onClick={()=>this.editData(key)} variant="primary">EDIT</Button>{' '}</td>

                               
                               
                                { <td> <Button  onClick={()=>this.deleteData(res.emp_id)} variant="danger">DELETE</Button></td> }
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
        WorkingData: state.working.working
    }
}
const mapDispactchToProps = (dispatch) => {
    return {
        getWorkingData: bindActionCreators(getWorking, dispatch),
        updateWorking:bindActionCreators(updateWorking, dispatch),
        deleteWorking:bindActionCreators(deleteWorking, dispatch)
    }
}
export default connect(mapStateToProps, mapDispactchToProps)(ViewWorking)
