import React from "react";
import Hero from "../../Components/Pages/About/About/AboutHero";
import AboutContent from "../../Components/Pages/About/AboutContent/AboutContent";
import OurActivities from "../../Components/Pages/About/AboutContent/OurActivities/OurActivities";

const AboutPage = () => {
  return (
    <div>
      <div>
        <Hero />
        <AboutContent />
        <OurActivities />
      </div>
    </div>
  );
};

export default AboutPage;
