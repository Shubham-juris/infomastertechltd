import React from 'react';

import './App.css';
import AboutHero from './components/AboutUs/AboutUs';
import WhyChooseUs from './components/AboutUs/WhyChooseUs';
import Navbar from './components/common/Navbar';
import Pageroutes from './routes/Pageroutes';
function App() {
  return (
    <>
     <Navbar/>
     <Pageroutes/>
   <AboutHero/>
   <WhyChooseUs/>
   </>
  );
}

export default App;
