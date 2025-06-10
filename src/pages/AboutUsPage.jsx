import React from 'react';
import AboutSection from '../components/AboutUs/AboutSection';
import CtaSection from '../components/AboutUs/CtaSection';
import ServicesSection from '../components/AboutUs/ServicesSection';


import TrustedPartnership from '../components/AboutUs/TrustedPartnership';
import WhyChooseUs from '../components/AboutUs/WhyChooseUs';
import AboutUs from '../components/AboutUs/AboutUs';

const AboutUsPage = () => {
  return (
    <>
      <AboutUs />
{/*       <AboutSection /> */}
      <CtaSection />
      <ServicesSection />
{/*       <TeamSection /> */}
      {/* <Testimonials /> */}
      <TrustedPartnership />
      <WhyChooseUs />
    </>
  );
};

export default AboutUsPage;
