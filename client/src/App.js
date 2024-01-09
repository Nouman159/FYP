import React, { useState } from 'react';
import "./App.css";
import { Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Services from './Pages/Services.js';
import Products from './Pages/Products.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('auction-jwt-token'));
  return (
    <div className="App">
      {isAuthenticated && <Navbar />}
      <div className='main-content'>
        <Routes>
          <Route path='/' element={!isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/home" />} />
          <Route path='/home' element={!isAuthenticated ? <Navigate to="/login" /> : <Home />} />
          <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/register' element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
          <Route path='/about' element={!isAuthenticated ? <Navigate to="/login" /> : <About />} />
          <Route path='/contact' element={!isAuthenticated ? <Navigate to="/login" /> : <Contact />} />
          <Route path='/services' element={!isAuthenticated ? <Navigate to="/login" /> : <Services />} />
          <Route path='/products' element={!isAuthenticated ? <Navigate to="/login" /> : <Products />} />
        </Routes>
      </div>
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
