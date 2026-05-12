import React from "react";
import "./AboutHero.css";
import aboutBg from "../../../../images/aboutbg.png";

const AboutHero = () => {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: "url(" + aboutBg + ")" }}
    >
      <div className="about-hero-overlay" />

      <div
        className="about-hero-content"
        data-aos="fade-left"
        data-aos-duration="1400"
      >
        <p
          className="about-hero-breadcrumb"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Home - About
        </p>

        <h1
          className="about-hero-title"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          About Us
        </h1>

        
      </div>
    </section>
  );
};

export default AboutHero;