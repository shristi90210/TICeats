
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
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea et ex facere explicabo libero similique tempore quaerat exercitationem reprehenderit non eos nesciunt culpa, maiores at in rerum quia? Possimus aliquam hic porro corporis aspernatur sint, ratione ea natus, voluptatem.<br />deleniti at  cumque nesciunt voluptas. Dignissimos, non! </p>

            <button className="menu-button"><Link to="/menu">CHECKOUT MENU ➡️</Link></button>
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