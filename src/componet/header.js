import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import pic from './images/u.png'

import './cssfiles/head.css';
import { Button } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar()
{
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:"#1c1713"}}>
        <Toolbar>
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <div className="b">
          <div className="dd">
           {/* <img src={pic} style={{width:"100px",height:"100px"}}></img> */}
           <img src={pic} style={{width:"100px",height:"100px"}}></img>
           {/* <h5><WeekendIcon/></h5> */}
           {/* <h3 style={{textAlign:'left',marginLeft:"15px",color:"black"}}><i>Wooden Street</i> */}
           {/* </h3> */}
           
           <h5 style={{textAlign:'left',marginLeft:"15px",marginTop:"35px"}}> ABOUT US  </h5>
           <h5 style={{textAlign:'left',marginLeft:"15px",marginTop:"35px"}}> SHOWROOMS  </h5>
           <h5 style={{textAlign:'left',marginLeft:"15px",marginTop:"35px"}}> COLLECTIONS </h5>

         
      
          </div>
          <div className="ff">
           <Button  style={{color:"white"}}href='/login'><h5 style={{textAlign:'left'}}> LOGIN </h5></Button>
         
           
            
          </div>
          </div>
          </Typography>
          
          <div className='ic' style={{margin:"20px"}}>
            <div style={{height:"60px"}}><PersonIcon/>Profile</div>
            <div><FavoriteBorderIcon/>Wishlist</div>
            <div><ShoppingCartIcon/>Cart</div>
          </div>
          
          <Search style={{marginLeft:"15px"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
