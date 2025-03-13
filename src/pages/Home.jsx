import React from "react";
import "../style/Home.css";
import Hero from "../components/Hero"; // Keeps the hero section
import SearchBar from "../components/SearchBar"; // Keeps the search bar
import Dining from "./Dining";
import Rooms from "./Rooms";

const Home = () => {
  return (
    <div>
      {/* Hero Section with Booking Form */}
      <Hero />

      {/* Search Bar for Booking */}
      <SearchBar />

      {/* Introduction Section */}
      <section className="home-intro">
        <h2>Welcome to Our Hotel</h2>
        <p>Experience luxury and comfort with world-class hospitality.</p>
      </section>

    

      {/* Contact Section */}
      <section className="contact-preview">
        <h2>Need Assistance?</h2>
        <p>📞 Call Us: +123-456-7890 | 📧 Email: info@hotel.com</p>
      </section>
    </div>
  );
};

export default Home;
