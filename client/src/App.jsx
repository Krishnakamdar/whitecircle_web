// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Web3Detail from "./pages/Web3Detail";
import Hero from "./components/Hero";

/*
  Changes:
  - The "/" route now renders <Hero /> above <Home /> so the homepage shows the hero section.
  - Added a /hero route so you can preview the hero alone for styling/testing.
  - All other routes remain unchanged.
*/

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Homepage: Hero + Home content */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Home />
              </>
            }
          />

          {/* Optional direct hero preview */}
          <Route path="/hero" element={<Hero />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/web3/:slug" element={<Web3Detail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
