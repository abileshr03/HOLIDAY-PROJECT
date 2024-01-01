import AboutUs from './componet/Aboutus';
import './App.css';
import Login from './componet/login';
import Register from './componet/Register';

import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './componet/home';
import SearchAppBar from './componet/bootnav';
import Footer from './componet/footer';
import SignUp from './componet/Register';
import SignIn from './componet/login';

import DenseAppBar from './componet/navbar2';
import Contact from './componet/Contact';
import ContactUs from './componet/Contact';
import { useContext } from 'react';
import { useState } from 'react';

import { LoginContext } from './context/logincontext';
import Groceries from './componet/groceries';
import BabyProducts from './componet/babyproducts';
import CartPage from './componet/cart';


function App() {
  const[flag,setFlag]=useState(true);
  return (
    <div className="App">
      <Router>
      <LoginContext.Provider value={{flag,setFlag}}>
      <SearchAppBar/>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/r' element={<SignUp/>} />
      <Route path='/a' element={<AboutUs/>} />
      <Route path='/sofa' element={<Groceries/>} />
      <Route path='/dining' element={<BabyProducts/>} />
      <Route path='/c' element={<ContactUs/>}/>
      <Route path='/home' element={<Home />} />
      <Route path='/cart' element={<CartPage />} />
      

     </Routes>
      </LoginContext.Provider>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;

{/* <PrimarySearchAppBar/>
<DenseAppBar/>
<Imagg/>
<BasicGrid/>
<Footer/>
</Router> */}