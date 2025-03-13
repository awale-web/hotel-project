import React from "react";
import "../style/Rooms.css";

const Rooms = () => {
  return (
    <div className="rooms-container">
      <h1>Rooms & Suites</h1>

      {/* Presidential Suite */}
      <div className="room">
        <img src="/presidential-suite.webp" alt="Presidential Suite" />
        <h2>Presidential Suite</h2>
        <p>Experience the height of luxury with our Presidential Suite, featuring a spacious living area, elegant decor, and top-tier amenities.</p>
        <p className="price">Price: $500 per night</p>
        <button className="book-btn">Book Now</button>
      </div>

      {/* Deluxe Room */}
      <div className="room">
        <img src="/deluxe-suite.webp" alt="Deluxe Room" />
        <h2>Deluxe Room</h2>
        <p>A stylish and cozy deluxe room with modern decor, a comfortable bed, and a stunning view.</p>
        <p className="price">Price: $250 per night</p>
        <button className="book-btn">Book Now</button>
      </div>

      {/* Executive Suite */}
      <div className="room">
        <img src="/executive-suite.webp" alt="Executive Suite" />
        <h2>Executive Suite</h2>
        <p>A luxurious executive suite with a spacious lounge, high-end furnishings, and premium service.</p>
        <p className="price">Price: $350 per night</p>
        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Rooms;