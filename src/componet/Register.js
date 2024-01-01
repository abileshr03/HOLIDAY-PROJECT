import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from "axios";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    
    
    const[fname,setFName]=useState("");
    const[lname,setLName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleFname=(event)=>
    {
        setFName(event.target.value);
    }
    const handleLname=(event)=>
    {
        setLName(event.target.value);
    }
    const handleEmail=(event)=>
    {
        setEmail(event.target.value);
    }
    const handlePassword=(event)=>
    {
        setPassword(event.target.value);
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        axios.
        post("http://localhost:3001/users",{"fname":fname,"lname":lname,"email":email,"password":password})
        .then((res)=>
        {
            console.log(res.data);
        })
        .catch((error)=>
        {
            console.log("Error: "+error);
        })
    }
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

  return (
    <ThemeProvider theme={defaultTheme} >
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleFname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleLname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={type}
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePassword}
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
              
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type={type}
                  id="password"
                  autoComplete="new-password"
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
              
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? 
                </Link>
                <Button href="/login">Sign in</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
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
      </Container>
      <br></br>
    </ThemeProvider>
    
  );
}