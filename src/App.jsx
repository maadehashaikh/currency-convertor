import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Destinations from "./Destinations";
import Services from "./Services";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">TravelSite</h1>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
