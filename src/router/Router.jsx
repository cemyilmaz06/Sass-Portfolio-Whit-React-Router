import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Projects from '../pages/projects/Projects'
import Contact from '../pages/contact/Contact'
import NotFound from '../components/Error/NotFound'

const Routers = () => {
  return (
    <BrowserRouter>
<Navbar/>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>







    </Routes>
    
    
    
    
    
    
    
    
    </BrowserRouter>
  )
}

export default Routers