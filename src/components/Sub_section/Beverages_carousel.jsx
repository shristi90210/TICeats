import React, { useState } from 'react';



const BeveragesData = [
    {
        image: 'https://i.pinimg.com/474x/4a/b4/da/4ab4dac46078c9ac507b1b63cf4c3fa6.jpg',
        title: 'Fanta',
        price: 'Rs 60',
    },
    {
        image: 'https://i.pinimg.com/736x/d4/c1/f4/d4c1f4fa91346a86910c9b96829ec8a5.jpg',
        title: 'Sprite',
        price: 'Rs 60',
    },
    {
        image: 'https://i.pinimg.com/474x/6e/c8/c4/6ec8c46af61de6f3a3ef0a5c4628f078.jpg',
        title: 'Coke',
        price: 'Rs 60',
    },
    {
        image: 'https://i.pinimg.com/474x/15/65/a5/1565a5017a9f2d457ec35eb8cbee3269.jpg',
        title: 'Black Tea',
        price: 'Rs 20',
    },
    {
        image: 'https://i.pinimg.com/474x/15/65/a5/1565a5017a9f2d457ec35eb8cbee3269.jpg',
        title: 'Milk Tea',
        price: 'Rs 25',
    },
    {
        image: 'https://i.pinimg.com/474x/08/08/ef/0808efb73cede257a542fc50df90a2ef.jpg',
        title: 'Mint Lemonade',
        price: 'Rs 100',
    },
    {
        image: 'https://i.pinimg.com/736x/dd/54/e6/dd54e61756ee4cd0327a9678ed309c38.jpg',
        title: 'Peach Iced Tea',
        price: 'Rs 120',
    },
    {
        image: 'https://i.pinimg.com/474x/d1/d0/d8/d1d0d88da1b9489d12ec05d99c61fb1d.jpg',
        title: 'Slice',
        price: 'Rs 70',
    }

];

function Beverages_section() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(BeveragesData.length / 4));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(BeveragesData.length / 4)) % Math.ceil(BeveragesData.length / 4));
    };

    const visibleDishes = BeveragesData.slice(currentIndex * 4, currentIndex * 4 + 4);

    return (
        <div className="beverages">
            <div className="beverages-section">
                <h1>BEVERAGES</h1>
                <div className="carousel">
                    <button className="arrow left" onClick={prevSlide}>❮</button>
                    <div className="beverages-items">
                        {visibleDishes.map((dish, index) => (
                            <div key={index} className="beverages-item">
                                <img src={dish.image} alt={dish.title} />
                                <div className="content">
                                <h3>{dish.title}</h3>
                                <p>Price | {dish.price}</p>
                                <button className="order-button">Add To Cart Now</button>

                                </div>

                            </div>
                        ))}
                    </div>
                    <button className="arrow right" onClick={nextSlide}>❯</button>
                </div>
            </div>
        </div>
    );
}

export default Beverages_section;  