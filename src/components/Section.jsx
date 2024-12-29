import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Sub_section/Home'
import About from './Sub_section/About'
import Contact from './Sub_section/Contact'
import Menu from './Sub_section/Menu'
import Page_not_found from './Sub_section/Page_not_found'
import Veg_menu from './Sub_section/Veg_menu'
import Non_veg_menu from './Sub_section/Non_veg_menu'


function Section() {
  return (
   <>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/veg-menu' element={<Veg_menu/>}></Route>
      <Route path='/non-veg-menu' element={<Non_veg_menu/>}></Route>
      <Route path='*' element={<Page_not_found/>}></Route>  
    </Routes>
   </>
  )
}

export default Section