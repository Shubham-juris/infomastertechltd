import React from 'react';
// import backgroundImage from '../assets/about-bg.png';
const AboutHero = () => {
  return (
    <section
      className='relative w-full h-[60vh] flex items-center justify-center text-center text-white'
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-60 z-0' />

      {/* Text Content */}
      <div className='relative z-10'>
        <h1 className='text-5xl font-bold mb-4'>About Us</h1>
        <p className='text-lg'>Home / About Us</p>
      </div>
    </section>
  );
};

export default AboutHero;
