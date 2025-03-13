import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Dining from "./pages/Dining";
import Rooms from "./pages/Rooms";
import Deluxe from "./pages/Deluxe";
import Executive from "./pages/Executive";
import Presidential from "./pages/Presidential";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/deluxe" element={<Deluxe />} />
        <Route path="/rooms/executive" element={<Executive />} />
        <Route path="/rooms/presidential" element={<Presidential />} />
      </Routes>
    </Router>
  );
};

export default App;