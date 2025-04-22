import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUsPage from '../pages/AboutUsPage';
import ServicesPage from '../pages/ServicesPage';
import { ContactPage } from '../pages/ContactPage';
import PgSection from '../pages/PgSection';



const Pageroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} /> 
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/pages" element={<PgSection/>}/>
    </Routes>
  );
};

export default Pageroutes;
