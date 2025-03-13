import React from "react";
import "./HotelSuite.css";

const suites = [
  {
    name: "Executive Suite",
    description: "A luxurious and spacious suite with modern amenities and a stunning city view.",
    price: "KES 15,000 per night",
    image: "/executive-suite.webp", // Directly inside public folder
  },
  {
    name: "Deluxe Suite",
    description: "An elegant suite offering comfort and a beautiful scenic view, perfect for relaxation.",
    price: "KES 10,000 per night",
    image: "/deluxe-suite-view.webp", // Directly inside public folder
  },
  {
    name: "Presidential Suite",
    description: "The ultimate luxury experience with premium furnishings and VIP services.",
    price: "KES 25,000 per night",
    image: "/presidential-suite.webp", // Directly inside public folder
  },
];

const HotelSuite = () => {
  return (
    <div className="hotel-suites">
      {suites.map((suite, index) => (
        <div key={index} className="suite-card">
          <img src={suite.image} alt={suite.name} />
          <div className="suite-info">
            <h2>{suite.name}</h2>
            <p>{suite.description}</p>
            <p className="suite-price">{suite.price}</p>
            <a href="#" className="book-now-btn">Book Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelSuite;