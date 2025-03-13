import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MA&F</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
          <Link to="#">Rooms & Suites ▾</Link>
          {dropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/deluxe">Deluxe Room</Link></li>
              <li><Link to="/executive">Executive Suite</Link></li>
              <li><Link to="/presidential">Presidential Suite</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/dining">Dining</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;