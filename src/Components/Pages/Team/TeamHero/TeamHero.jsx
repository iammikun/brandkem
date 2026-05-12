import React from "react";
import "./TeamHero.css";
import teamBg from "../../../../images/teambg.png";

const TeamHero = () => {
  return (
    <section
      className="team-hero"
      style={{ backgroundImage: "url(" + teamBg + ")" }}
    >
      <div className="team-hero-overlay" />

      <div
        className="team-hero-content"
        data-aos="fade-left"
        data-aos-duration="1400"
      >
        <p
          className="team-hero-breadcrumb"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Home - Team
        </p>

        <h1
          className="team-hero-title"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Meet Our Team
        </h1>

        <p
          className="team-hero-sub"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          Thinkers · Strategists · Designers · Activations
        </p>
      </div>
    </section>
  );
};

export default TeamHero;