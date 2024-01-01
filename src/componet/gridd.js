import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './cssfiles/grid.css'
import Grid from '@mui/material/Grid';
// import pic1 from 'icon1.jpg'

// import bookimage from'../assets/study.jpg';


    



export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} paddingTop={6}>
      <Grid container spacing={2} padding={2}>
        <Grid xs={12}>
          <h1>Top Picks For You!</h1>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src="https://img.freepik.com/free-vector/fresh-organic-milk-products-set-with-cheese-butter_1284-14075.jpg?w=740&t=st=1704037300~exp=1704037900~hmac=be1f285b4f069fa558478af5039ecc9ac67a1f2946c2678179917e48e24cf5d7" height={300}></img>
        <br></br>
          <h2>Dairy Products</h2>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=1060&t=st=1704037449~exp=1704038049~hmac=a970c4f3eff87a276a8a4008456f3d230f16bd3e9218cd1f9689ffc48664f5f2" height={300}></img>
        <br></br>
          <h2>Fruits & Vegetables</h2>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src="http://purepng.com/public/uploads/large/purepng.com-soda-canfood-soda-object-can-drink-beverage-coke-941524597484qfy9c.png" height={300}></img>
        <br></br>
          <h2>Beverages</h2>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src="https://img.freepik.com/free-vector/colored-cosmetic-template-composition-business-presentation-with-label-with-brand_1284-17379.jpg?w=1060&t=st=1704037636~exp=1704038236~hmac=3a62d2224ee58d3d0af28917674cbc00f7082eb149a9b129943af9bd8bd457c6" height={300}></img>
          <h2>Personal Care</h2>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src="https://tse1.mm.bing.net/th?id=OIP.xLmLJqZ9CMmLLzBij1JkxgHaHa&pid=Api&P=0&h=180" height={270}></img>
          <h2>Home & Kitchen</h2>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src="https://img.freepik.com/premium-photo/concept-baby-clothes-with-reusable-diapers-isolated-white-background_185193-67476.jpg?w=1060" height={300}></img>
          <h2>Baby Products</h2>
        </Grid>
       
        
       
        
      </Grid>
    </Box>
  );
}





    
  

