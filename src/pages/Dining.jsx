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

      </div>
    
  );
};

export default Dining;