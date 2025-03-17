import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeluxeRoom from "./pages/Deluxe";
import ExecutiveRoom from "./pages/Executive";
import PresidentialRoom from "./pages/Presidential";
import Navbar from "./components/Navbar"; // Ensure this file exists
import Dining from "./pages/Dining";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About"; // Fixed import

function App() {
  return (
    <Router>
      <Navbar /> {/* Navigation bar inside Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> {/* Fixed case issue */}
        
        {/* Rooms & Suites dropdown pages */}
        <Route path="/rooms/deluxe" element={<DeluxeRoom />} />
        <Route path="/rooms/executive" element={<ExecutiveRoom />} />
        <Route path="/rooms/presidential" element={<PresidentialRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
