// src/components/Sub_section/Veg_menu.jsx  
import React from 'react';
import Veg_menu_data from './Veg_menu_data';
import TodaysSpecial from './Carousel_data';

import Beverages_section from './Beverages_carousel';

const Veg_menu = () => {
  return (
    <div className="veg-menu">
      <div className="veg-menu-section">
        <h2>VEG MENU</h2>
        <div className="menu-list">
          {Veg_menu_data.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.image} alt={item.title} className="menu-image" />
              <h3 className="dish-title">{item.title}</h3>
              <p className="price">Price | {item.price} </p>
              <div className="button-group">
                <button className="add-button">+</button>
                <button className="remove-button">−</button>
              </div>
              <div className="order-now-btn">
                <button className="order-now">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Beverages_section />
      <div className="specials-section">
        <div className="carousel">
          <TodaysSpecial />
        </div>

      </div>
    </div>


  );
}

export default Veg_menu;