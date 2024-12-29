import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-section">
   <div className="footer-content">
       
   <div className="left-content">
        <ul>
        <li><h3>WE'RE TIC EATS</h3></li> 
        <li><Link to= '/about'>About Us </Link> </li>
        <li><Link to= '/menu'>Checkout Our Menu </Link> </li>
        </ul>
      </div>
      <div className="mid-content">
      <ul>
        <li><h3>CALL US</h3></li> 
        <li> 📞 01-5971224</li>
        <li>Old Baneshwor, Kathmandu 44600 </li>

        </ul>
      </div>
   </div>
   <br />
   <p>© 2024 Thames International College Pvt. Ltd.. All Rights Reserved. Developed By: Ekbana</p>

    </div>
   
  )
}

export default Footer