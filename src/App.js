// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init({
  duration: 1000, // Animation duration
  once: true, // Only animate once
});


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Portfolio />}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
