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

export default function BabyProducts() {
  return (
    <div>
      <DenseAppBar/>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  <div class="carousel-item active ">
      <img  style={{height:"100vh"}} src="https://img.freepik.com/free-photo/baby-clothes_1220-4295.jpg?w=1060&t=st=1704041115~exp=1704041715~hmac=8c9862c833ea11ca23f44b4f26d1f8df24a43fc9d166c73017a6133ea9cabdf8" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item ">
      <img  style={{height:"100vh"}} src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item ">
      <img style={{height:"100vh"}} src="https://images.unsplash.com/photo-1610276099599-67d69ba55d1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."></img>
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
          <h1>Baby Products</h1>
        </Grid>
        <Grid  xs={12}>
          <p>At Premium Groceries, we understand that your little ones deserve the best. Our curated selection of baby products is designed to bring joy, comfort, and safety to every precious moment of your baby's journey.</p>
        </Grid>
        <Grid container >

          
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://i5.walmartimages.com/asr/495906d6-a05c-428f-a12d-3c97f1106bd7.6ab515a1e4f6caa7ff14baea7b9b8e1f.jpeg"></img>
          <h4>Wipes</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img style={{width:"310px",height:"300px"}} src="https://i5.walmartimages.ca/images/Enlarge/737/023/6000198737023.jpg
"></img>
<h4>Baby Powders</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://i5.walmartimages.com/asr/568f4b1f-cd26-478a-8f2c-151d47da3d79.c0f9834013b50f803246180124fd2a87.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"></img>
          <h4>Diapers</h4>
        </Grid>
        
        
      </Grid>
      </div>
    
  );
}
