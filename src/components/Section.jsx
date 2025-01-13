import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Sub_section/Home'
import About from './Sub_section/About'
import Contact from './Sub_section/Contact'
import Menu from './Sub_section/Menu'
import Page_not_found from './Sub_section/Page_not_found'
import Snacks from './Sub_section/Snacks'
import Beverages_section from './Sub_section/Beverages_carousel'
import Add_to_cart from './Sub_section/Add_to_cart'


function Section() {
  return (
   <>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/snacks' element={<Snacks/>}></Route>
      <Route path='/add-to-cart' element={<Add_to_cart/>}></Route>
      <Route path='/beverages' element={<Beverages_section/>}></Route>
      <Route path='*' element={<Page_not_found/>}></Route>  
    </Routes>
   </>
  )
}

export default Section