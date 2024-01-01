// AboutUs.js
import { Grid } from '@mui/material';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './cssfiles/aboutus.css'; // Import your custom CSS file
import pic from "./images/imagelogo.png"
import Imag from './aboutusimg';

import Footer from './footer';
import SearchAppBar from './bootnav';
const AboutUs = () => {
  return (
    <div>
      {/* <SearchAppBar/> */}
      <Imag/>
    <Container className="about-us-container mt-5 p-4">
      <Row className="align-items-center">
       
        <Col md={12} className="about-us-text">
      
          <p>
          At Premium Groceries, we believe that a well-nourished life starts with fresh, quality groceries. Our journey began with a simple yet powerful vision: to bring the finest produce, pantry staples, and culinary delights to your doorstep, all with the ease of online shopping.
          </p>
          <h6>Our Story</h6>
          <p>
          Premium Groceries was born out of a passion for providing a seamless grocery shopping experience. Our founders, a team of food enthusiasts and industry experts, came together with a shared commitment to redefine the way you shop for groceries. Inspired by the desire to make every meal exceptional, we set out to curate a selection that combines freshness, flavor, and convenience.
          </p>
          {/* Add more content as needed */}
        </Col>
      </Row>
    </Container>
    <Container>
    </Container>
    <Container>
    <Grid container spacing={1} padding={8}> 
       <Grid xs={12} sm={6} md={4} lg={3}>
        <img src="https://www.woodenstreet.com/images/about-us/store-icon.svg"></img>
        <h4>90+</h4>
        <h6>Scores Across India</h6>
       </Grid>
       <Grid xs={12} sm={6} md={4}  lg={3}>
        <img src="	https://www.woodenstreet.com/images/about-us/thumb-icon.svg"></img>
        <h4>10Lakh+</h4>
        <h6>Satisfied Customers</h6>
       </Grid>
       <Grid xs={12} sm={6} md={4}  lg={3}>
        <img src="https://www.woodenstreet.com/images/about-us/truck-icon.svg"></img>
        <h4>100+</h4>
        <h6>Delivery Centers</h6>
       </Grid>
       <Grid xs={12} sm={6} md={4}  lg={3}>
        <img src="https://www.woodenstreet.com/images/about-us/product-box.svg"></img>
        <h4>10k+</h4>
        <h6>Furniture & Furnishing Products</h6>
       </Grid>
    </Grid>
    </Container>
    {/* <Footer/> */}
    </div>
  );
};

export default AboutUs;
