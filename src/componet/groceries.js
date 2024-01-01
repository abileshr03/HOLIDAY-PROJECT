import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DenseAppBar from './navbar2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Groceries() {
  return (
    <div>
      <DenseAppBar/>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  style={{height:"100vh"}} src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid w-100" alt="..."></img>
    </div>
    <div class="carousel-item ">
      <img  style={{height:"100vh"}} src="https://images.unsplash.com/photo-1578112010316-b44c50d27b2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid w-100" alt="..."></img>
    </div>
    <div class="carousel-item ">
      <img style={{height:"100vh"}} src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br></br>
      <Grid container spacing={1} padding={2}>
        <Grid  xs={12}>
          <h1>Groceries</h1>
        </Grid>
        <Grid  xs={12}>
          <p> Our dedication to quality is unwavering. We source the freshest fruits, vegetables, meats, and pantry essentials to ensure that every item in your cart exceeds your expectations.</p>
        </Grid>
        <Grid container >

          
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1060&t=st=1704039953~exp=1704040553~hmac=27a78311406d03d41159df3e9c634e31bf595987f303519da41de8027945dae4"></img>
          <h4>Fruits</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img style={{width:"310px",height:"300px"}} src="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=1060&t=st=1704039885~exp=1704040485~hmac=1be431ae4566aa57918a73cd7a4b0edf534be175fef1920fc911ed63431aa326
"></img>
<h4>Vegetables</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://img.freepik.com/premium-photo/cashew-nuts-peeled-raw-wooden-bowl-isolated-white-background-vegan-food-top-view_84485-2080.jpg?w=1060"></img>
          <h4>Almonds & Cashews</h4>
        </Grid>
        
        
      </Grid>
      </div>
    
  );
}
