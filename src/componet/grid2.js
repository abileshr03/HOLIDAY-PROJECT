import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './cssfiles/grid2.css'
import Grid from '@mui/material/Grid';
// import pic1 from 'icon1.jpg'

// import bookimage from'../assets/study.jpg';


    



export default function BasicGridtwo() {
  return (
    <Box sx={{ flexGrow: 1 }} paddingTop={6}>
      <Grid container spacing={2} >
        <Grid xs={12}>
            <h2> India's Finest Groceries </h2>
           
        </Grid>
        
        
        <Grid xs={12} md={6} lg={4} padding={2} className='k'>
        <img   className="i" src="https://cdn.dmart.in/images/rwd/banners/vwctb/13cw/9nove22-3cw-breakfast.jpg" style={{height:"287px",borderRadius:"8px"}}></img>
          
        </Grid>
        <Grid  xs={12} md={6} lg={4}  padding={2} className='k'>
        <img   className="i" src="https://cdn.dmart.in/images/rwd/banners/vwctb/1may23-3cw-stationery.jpg" style={{height:"287px",borderRadius:"8px"}}></img>
          
        </Grid>
        <Grid  xs={12} md={6} lg={4}  padding={2} className='k'>
        <img   className="i" src="https://cdn.dmart.in/images/rwd-mobile/banners/vwctb/1may23-3cw-homedecor.jpg"style={{height:"287px",borderRadius:"8px"}}></img>
          
        
        
      </Grid>
      </Grid>
    </Box>
  );
}





    
  

