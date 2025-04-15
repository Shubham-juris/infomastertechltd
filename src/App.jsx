import React from 'react';

import './App.css';
import AboutHero from './components/AboutUs/AboutUs';
import WhyChooseUs from './components/AboutUs/WhyChooseUs';
import Navbar from './components/common/Navbar';
import Pageroutes from './routes/Pageroutes';
import TrustedPartnership from './components/AboutUs/TrustedPartnership';
import AboutSection from './components/AboutUs/AboutSection';
import CtaSection from './components/AboutUs/CtaSection';
import TeamSection from './components/AboutUs/TeamSection';
import ServicesSection from './components/AboutUs/ServicesSection';
import Footer from './components/Footer/Footer';
import Testimonials from './components/AboutUs/Testimonials';
import OurServices from './components/Service/OurServices';
import Services from './components/Service/Services';
import CtaServices from './components/Service/CtaServices';
import { Contact } from 'lucide-react';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
     <Navbar/>
     <Pageroutes/>
   <AboutHero/>
   <WhyChooseUs/>
   <TrustedPartnership/>
   <AboutSection/>
   <CtaSection/>
   <TeamSection/>
   <ServicesSection/>
   <Testimonials/>

   <Services/>
   <OurServices/>
   <CtaServices/>


   <ContactUs/>
   <Footer/>
   </>
  );
}

export default App;
