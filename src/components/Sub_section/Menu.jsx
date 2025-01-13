import React from 'react'
import { Link } from 'react-router-dom'
import TodaysSpecial from './Carousel_data'

function Menu() {
  return (
    <div className="menu-section">
      <div className="menu-container">
        <h1>MENU</h1>
        <div className="menu-buttons">
          <button className="menu-button" ><Link to="/snacks">SNACKS</Link></button>
          <button className="menu-button"><Link to="/beverages">BEVERAGES</Link></button>
        </div>
      </div>
      <div className="specials-section">  
        <div className="carousel">
          <TodaysSpecial/>
        </div>
      </div> 
    </div>
  )

}

export default Menu