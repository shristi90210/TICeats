
import React from 'react';
import gallery from '../../assets/images/gallery.jpeg';

import { Link } from 'react-router-dom';
import TodaysSpecial from './Carousel_data';

function Home() {
  return (
    <div className="homepage">

      <div className="intro-section">
        <div className="circle">
          <div className="circle-cont">
            <h1>TIC Eats</h1>
            <p>Your one-stop solution for delicious meals at Thames International College!<br/> With TIC Eats, ordering food is easier and faster than ever!  </p>

            <button className="menu-button"><Link to="/menu">CHECKOUT MENU <i class="fa-solid fa-arrow-right"></i></Link></button>
          </div>

        </div>
        <div className="img-gallery">
          <img src={gallery} alt="gallery" />
        </div>
      </div>

      <div className="specials-section">
        <div className="carousel">
          <TodaysSpecial/>
        </div>
      </div>
    </div>
  );
}

export default Home;