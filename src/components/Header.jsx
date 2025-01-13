// src/components/Header.jsx  
import React from 'react';  
import { Link } from 'react-router-dom';  
import 'font-awesome/css/font-awesome.css';

function Header() {  
  return (  
    <header className="main-header">  
      <nav>  
        <ul className="nav-links">  
          <li><Link to="/">Home</Link></li>  
          <li><Link to="/about">About</Link></li>  
          <li><Link to="/menu">Menu</Link></li>  
          <li><Link to="/contact">Contact</Link></li>  
        </ul>  
      </nav>  
      <div className="logo">TIC</div>  
      <div className="icons"> 
      <span className="icon"><i class="fa-solid fa-cart-shopping"></i></span> 
        <span className="icon"><i class="fa-regular fa-user"></i></span> 
      </div>  
    </header>  
  );  
}  

export default Header;
