import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData, getHistory } from "../../redux/action/action.history";
import { Table, Button } from 'react-bootstrap';




class ViewHistory extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            emp_id:"",
            from_date:null,
            to_date:null,
            
        }
       
        this.props.getHistoryData()
    }
getdata=()=>{
    this.props.getdatedata(this.state.emp_id,this.state.from_date,this.state.to_date)


}
    render() {

        let { HistoryData } = this.props
        return (


          

             <div style={{ marginBottom: "350px" }} >
                 <br></br>
             <br></br>
           emp_id    <input  type="text" value={this.state.emp_id} onChange={(event) => this.setState({ emp_id: event.target.value })} />{this.state.emp_id} <br />
           <br></br>
           From date   <input type="date" onChange={(event)=>this.setState({from_date:event.target.value})} />{this.state.From_date} <br />
           <br></br>
           To Date     <input type="date" onChange={(event)=>this.setState({to_date:event.target.value})}  />{this.state.to_date}  <Button onClick={this.getdata} variant="outline-primary">Get Data </Button>{' '}
           

           <Table striped bordered hover variant="dark">
            <thead>
               
                
                <br></br>
             
                    
                    <tr>
                    <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>Work Id</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>Employee Id</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>From Date</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>To Date</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>Monthly Sallary</th>      
                    <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>Site Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        HistoryData.map(res => (
                            <tr>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.work_id}</td>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.emp_id}</td>
                                <td style ={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.from_date}</td>                            
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.to_date}</td>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.monthly_sallary}</td>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.site_name}</td>
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
       HistoryData: state.history
    }
}
const mapDispactchToProps = (dispatch) => {
    return {
        getHistoryData: bindActionCreators(getHistory, dispatch),
        getdatedata:bindActionCreators(getData, dispatch)
        
    }
}
export default connect(mapStateToProps, mapDispactchToProps)(ViewHistory)
