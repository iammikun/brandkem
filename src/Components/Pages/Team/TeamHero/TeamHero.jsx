import React, { useEffect } from "react";
import classes from "./TeamHero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={classes.teamHeroContainer}>
      <div className={classes.teamHeroWrapper} data-aos="fade-right">
        <h1>Our Team</h1>
        <p>Home - Our Team</p>
      </div>
    </div>
  );
};

export default TeamHero;
