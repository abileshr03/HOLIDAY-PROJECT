import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function DenseAppBar() {
  return (
    <div class="container" >
  <div class="row">
    <div class="col col-xs-12 col-sm-4 col-md-2 col-lg-2" >
      <Link to='/sofa'><button style={{border:"none",backgroundColor:"white"}}><h4>Grocery</h4></button></Link>
    </div>
    <div class="col col-xs-12 col-sm-4 col-md-2 col-lg-2">
    <Link to='/dining'><button style={{border:"none",backgroundColor:"white"}}><h4>Baby Products</h4></button></Link>
    </div>
    <div class="col col-xs-12 col-sm-4 col-md-2 col-lg-2">
      <h4>Dairy Products</h4>
    </div>
    <div class="col col-xs-12 col-sm-4 col-md-2 col-lg-2">
      <h4>Personal Care</h4>
    </div>
    <div class="col col-xs-12 col-sm-4 col-md-2 col-lg-2">
      <h4>Home & Kitchen</h4>
    </div>
    <div class="col col-xs-12 col-sm-4 col-md-2 col-lg-2">
     <h4> Packaged Foods</h4>
    </div>
  </div>
</div>)}
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" style={{backgroundColor:"#f1eadf"}}>
//         <Toolbar variant="dense">
//           <Grid container spacing={1}>
//          <Grid>
//           <Typography variant="h6" color="#4f4d4a" component="div" margin={"22px"}>
//             Sofas
//           </Typography>
//           </Grid>
//           <Grid>
//           <Typography variant="h6" color="#4f4d4a" component="div" margin={"22px"}>
//             Living
//           </Typography>
//           <Grid>
//           <Grid>  
//           <Typography variant="h6" color="#4f4d4a" component="div" margin={"22px"}>
//             Bedroom
//           </Typography>
//           </Grid>
//          <Grid>
//           <Typography variant="h6" color="#4f4d4a" component="div" margin={"22px"}>
//             Dining & Kitchen
//           </Typography>

//          </Grid>
//           </Grid>

//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
