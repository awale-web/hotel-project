import React from "react";
import "../style/SearchBar.css"; // Ensure the CSS file exists

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Enter destination..." />
        <input type="date" placeholder="Check-in" />
        <input type="date" placeholder="Check-out" />
        <select>
          <option value="">Guests</option>
          <option value="1">1 Adult</option>
          <option value="2">2 Adults</option>
          <option value="3">3 Adults</option>
          <option value="4">4+ Adults</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
