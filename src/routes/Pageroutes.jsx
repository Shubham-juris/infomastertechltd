import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutHero from '../components/AboutUs/AboutUs'

const Pageroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutHero/>}/>

      </Routes>
    </>
  )
}

export default Pageroutes
