import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { LoginContext } from '../context/logincontext';
import { useContext } from 'react';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';


export default function SearchAppBar()
{ 
  const{flag}=useContext(LoginContext);
  // console.log(flag);

  return(
    <nav class="navbar  sticky-top navbar-expand-lg navbar-light " style={{backgroundColor:"#6ba05c"}} id="navbar-bt">
  <div class="container-fluid navbar-bt">
    <a class="navbar-brand" ><h3 className="brand" style={{marginRight:"5px"}}>Premium Groceries!</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href='/a'>AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='/cart'>Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='/c'>Contact Us</a>
        </li>
       
      </ul>
      <form class="d-flex">
       
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
        {flag?(<Button  href="/login" style={{marginLeft:'10px',backgroundColor:"black",color:"white"}} >Login</Button>):
         (<button class="btn btn-dark" style={{marginLeft:'10px'}}><PersonIcon/></button>)}
         {/* <Button  href="/login" style={{marginLeft:'10px',backgroundColor:"black",color:"white"}} >Login</Button> */}
      </form>
    </div>
  </div>
</nav>
  )
}