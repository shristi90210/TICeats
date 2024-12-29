import React, { useState } from 'react';



const specialsData = [
  {
    image: 'https://i.pinimg.com/474x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg',
    title: 'Chicken Burger',
    price: 'Rs 150',
  },
  {
    image: 'https://i.pinimg.com/474x/b4/3e/49/b43e49c1703240d7c0ddff038acd623e.jpg',
    title: 'Fried Chicken',
    price: 'Rs 120',
  },
  {
    image: 'https://i.pinimg.com/474x/62/38/08/6238083cdbed4e1243890eb8f4e53867.jpg',
    title: 'Ichiraku Ramen',
    price: 'Rs 250',
  },
  {
    image: 'https://i.pinimg.com/736x/0d/30/a5/0d30a50cc5d177f74bab07e2e0190a1e.jpg',
    title: 'Egg Noodles',
    price: 'Rs 200',
  },
  {
    image: 'https://i.pinimg.com/736x/da/0e/ab/da0eab68dd2903ffb11b9db0c9f7637f.jpg',
    title: 'Buff Sandwich',
    price: 'Rs 200',
  },
  {
    image: 'https://i.pinimg.com/736x/56/1c/a3/561ca3254baef3ad889fa5b6faf1fcfd.jpg',
    title: 'Fried Rice',
    price: 'Rs 210',
  },
  {
    image: 'https://i.pinimg.com/474x/2c/55/d7/2c55d7879f98bfd6f13ae4faf4c936f9.jpg',
    title: 'Chicken Pizza',
    price: 'Rs 230',
  },
  {
    image: 'https://i.pinimg.com/474x/78/98/7a/78987a0b41417c32141269dff0d541a4.jpg',
    title: 'Spaghetti',
    price: 'Rs 310',
  }

];

function TodaysSpecial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(specialsData.length / 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(specialsData.length / 4)) % Math.ceil(specialsData.length / 4));
  };

  const visibleDishes = specialsData.slice(currentIndex * 4, currentIndex * 4 + 4);

  return (
    <div className="homepage">
      <div className="specials-section">
        <h1>TODAY'S SPECIAL</h1>
        <div className="carousel">
          <button className="arrow left" onClick={prevSlide}>❮</button>
          <div className="special-items">
            {visibleDishes.map((dish, index) => (
              <div key={index} className="special-item">
                <img src={dish.image} alt={dish.title} />
                <h3>{dish.title}</h3>
                <p>Price | {dish.price}</p>
                <div className="button-group">
                <button className="add-button">+</button>
                <button className="remove-button">−</button>
              </div>
                <button className="order-button">Order Now</button>

              </div>
            ))}
          </div>
          <button className="arrow right" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </div>
  );
}

export default TodaysSpecial;  