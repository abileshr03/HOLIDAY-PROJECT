import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import {useState} from "react";
import './cssfiles/login.css'
import {Link, redirect,useHistory,Navigate, useNavigate  } from 'react-router-dom'
import LoginPopup from './LoginError';
import Popup from './LoginError';
import { LoginContext } from '../context/logincontext';
import { useContext } from 'react';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const[visited,setVisited]=useState(true);
  const[type,setType]=useState("password")
  const handleClickPassword=()=>
  {
    if(type==="password")
    {
      setType("text");
      setVisited(true);
    }
    else{
     setType("password");
     setVisited(false);
    }

 
  }
  const {setFlag}=useContext(LoginContext);
  const[popUp,setPopup]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const fetch=async(event)=>{
    event.preventDefault();
    

    const response=await axios.get("http://localhost:3001/users");
    response.data.map((obj)=>{
      
      if(obj.email===email)
      {
       
        if(obj.password===password)
        {
          
          console.log("Success");
          setFlag(false);
          navigate('/home')
          
        }
        else
        setPopup(true);
        
        
      }
      else
      setPopup(true);
      
     
      
    })
    
    
  }
  
  // console.log(flag);

  return (
    <ThemeProvider theme={defaultTheme} >
      <div className="l">
        
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={
                (e)=>
                setEmail(e.target.value)
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={type}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                          <IconButton
                              onClick={
                                  handleClickPassword
                              }
                              
                          >
                              {visited ? (
                                  <VisibilityIcon/>
                              ) : (
                                  <VisibilityOffIcon />
                              )}
                          </IconButton>
                      </InputAdornment>
                ),
              }}
              onChange={
                (e)=>
                setPassword(e.target.value)
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={fetch}
              
            >
              Sign In
            </Button>
            <Popup trigger={popUp}/>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{marginTop:"65px"}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                
                  <Link>{"Don't have an account?"}</Link>
                  <Button  style={{height:"27px"}} href="/r">SignUp</Button>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Premium Furnitures
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
      </div>
    </ThemeProvider>
  );
}