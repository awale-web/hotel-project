import React from "react";
import "../style/Dining.css"; // Ensure this CSS file exists

const Dining = () => {
  return (
    <div className="dining-container">
      <h1>Dining Experience</h1>
      <p>Enjoy a world-class dining experience with a variety of delicious meals and a comfortable ambiance.</p>

      {/* Breakfast Area */}
      <div className="dining-section">
        <h2>Breakfast Seating</h2>
        <img src="/breakfast-seating.jpg" alt="breakfast seating" />
      </div>

      {/* Buffet Section */}
      <div className="dining-section">
        <h2>Breakfast Buffet</h2>
        <img src="/buffer.jpg" alt="Breakfast Buffet" />
      </div>

      {/* Popular Dishes */}
      <div className="dining-section">
        <h2>Our Special Dishes</h2>
        <div className="dishes">
          <div className="dish">
            <img src="/dish steak.jpg" alt="Steak Dish" />
            <p>Grilled Steak</p>
          </div>
          <div className="dish">
            <img src="/italian-pasta.jpg" alt="Pasta Dish" />
            <p>Italian Pasta</p>
          </div>
          <div className="dish">
            <img src="/dish-dessert.webp" alt="Dessert" />
            <p>Delicious Dessert</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;