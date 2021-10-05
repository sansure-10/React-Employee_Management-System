import React from "react";

import { Carousel } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import img1 from "../IMAGES/img1.jpg"
import img2 from "../IMAGES/img2.jpg"
import img3 from "../IMAGES/img3.jpg"



class Home extends React.Component {

   
    render() {
        return (
            <>
            <div>
            <h1 align="center" style= {{"background-color":"black", color:"wheat"}} >EMPLOYEE MANAGEMENT SYSTEM</h1>
                <Carousel style={{margin:'0px'}}>
                    <Carousel.Item>
                  
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                            height='1000px'
                        />
                        <Carousel.Caption>
                            {<h3>Your Commitment To The Team Wins You The Most Valuable Player Award.</h3> }
                          
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            height='1000px'
                        />

                        <Carousel.Caption>
                            <h3>Talent Wins Games, But Teamwork And Intelligence Wins Championships.</h3>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Third slide"
                            height='1000px'
                        />

                        <Carousel.Caption>
                            <h3>Outstanding People Have One Thing In Common: An Absolute Sense Of Mission</h3>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </>
        )
    }
}



export default Home