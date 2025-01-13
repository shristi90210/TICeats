import React from 'react';
import Non_veg_data from './Non_veg_menu_data'; 


const Non_veg_menu = () => {
  return (
    <div className="non-veg-menu">
      <div className="non-veg-menu-section">
        <h2>NON-VEG MENU</h2>
        <div className="menu-list">
          {Non_veg_data.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.image} alt={item.title} className="menu-image" />
              <h3 className="dish-title">{item.title}</h3>
              <p className="price">Price | {item.price} </p>
              <div className="button-group">
                <button className="add-button">+</button>
                <button className="remove-button">−</button>
              </div>
              <div className="order-now-btn">
                <button className="order-now">Add To Cart Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
     
       
    </div>
    
  );
}

export default Non_veg_menu;