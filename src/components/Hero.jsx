import React from "react";
import "../style/Hero.css";
import heroImage from "../assets/hero.webp"; // Adjust the path based on your project structure

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <h1>Find Your Perfect Stay</h1>
        <p>Best hotel deals at your fingertips</p>
        <button className="book-now">Book Now</button>
      </div>
    </section>
  );
};

export default Hero;