import React from 'react';

import './App.css';
import Navbar from './components/common/Navbar';
import Pageroutes from './routes/Pageroutes';
import Footer from './components/common/Footer';
function App() {
  return (
    <> 
     <Navbar/>
     <Pageroutes/>
     <Footer/>
   </>
  );
}

export default App;
