import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header.jsx';
import HomePage from "./Pages/Home/HomePage.jsx";
import AboutPage from "./Pages/About/AboutPage";
import Footer from "./Components/Footer/Footer.jsx"
import TeamPage from "./Pages/TeamPage/TeamPage.jsx"
import ContactPage from "./Pages/Contact/ContactPage.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
