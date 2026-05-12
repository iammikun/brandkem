import React from "react";
import TeamHero from "../../Components/Pages/Team/TeamHero/TeamHero";
import TeamCarousel from "../../Components/Pages/Home/Team/TeamCarousel/TeamCarousel";

import AOS from "aos";
import "aos/dist/aos.css";


const TeamPage = () => {
  return (
    <div>
      <TeamHero />
      <TeamCarousel />
    </div>
  );
};

export default TeamPage;