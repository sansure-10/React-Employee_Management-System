import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSite } from "../../redux/action/action.site";
import { Table } from 'react-bootstrap';





class ViewSite extends React.Component {
    constructor(props) {
        super(props)
        this.props.getSiteData()
    }
       
        
    

    render() {
        let { SiteData } = this.props
        return (
            <div style={{ marginBottom: "300px" }}>

            <br></br>
            <br></br>
            
            <Table striped bordered hover variant="dark">
            <thead>
               
                    <tr>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>employee Site No</th>
                        <th style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>Site Location</th><br></br>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        SiteData.map((res,key) => (
                            <tr>
                                <td style={{height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}}>{res.employee_site_no}</td>
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
        SiteData: state.site
    }
}
const mapDispactchToProps = (dispatch) => {
    return {
        getSiteData: bindActionCreators(getSite, dispatch),
      
    }
}
export default connect(mapStateToProps, mapDispactchToProps)(ViewSite)