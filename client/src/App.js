import React, { useState } from 'react';
import "./App.css";
import { Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loader from "./Components/Loader";
import { useSelector } from "react-redux";
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Services from './Pages/Services.js';
import ArtRegistration from './Pages/ArtRegistration.js';
import ArtworkAuthentication from './Pages/ArtworkAuthentication.js';
import LiveAuction from './Pages/LiveAuction.js';
import RecommendedArt from './Pages/RecommendedArt.js';
import CommissionArtworkRequest from './Pages/CommissionedArtworkRequest.js';
import Products from './Pages/Products.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('auction-jwt-token'));
  const { loading } = useSelector((state) => state.loader);

  return (
    <div className="App">
      {loading && <Loader />}
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <div className='main-content'>
        <Routes>
          <Route path='/' element={!isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/home" />} />
          <Route path='/home' element={!isAuthenticated ? <Navigate to="/login" /> : <Home />} />
          <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/register' element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
          <Route path='/about' element={!isAuthenticated ? <Navigate to="/login" /> : <About />} />
          <Route path='/contact' element={!isAuthenticated ? <Navigate to="/login" /> : <Contact />} />
          <Route path='/services' element={!isAuthenticated ? <Navigate to="/login" /> : <Services />} />
          <Route path='/services/art-registration' element={!isAuthenticated ? <Navigate to="/login" /> : <ArtRegistration />} />
          <Route path='/services/artwork-authentication' element={!isAuthenticated ? <Navigate to="/login" /> : <ArtworkAuthentication />} />
          <Route path='/services/commissioned-artwork-request' element={!isAuthenticated ? <Navigate to="/login" /> : <CommissionArtworkRequest />} />
          <Route path='/services/live-auction' element={!isAuthenticated ? <Navigate to="/login" /> : <LiveAuction />} />
          <Route path='/services/recommended-art' element={!isAuthenticated ? <Navigate to="/login" /> : <RecommendedArt />} />

          <Route path='/products' element={!isAuthenticated ? <Navigate to="/login" /> : <Products />} />
        </Routes>
      </div>
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
