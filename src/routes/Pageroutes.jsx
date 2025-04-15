import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUsPage from '../pages/AboutUsPage';
import ServicesPage from '../pages/ServicesPage';
import { ContactPage } from '../pages/ContactPage';



const Pageroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} /> 
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  );
};

export default Pageroutes;
