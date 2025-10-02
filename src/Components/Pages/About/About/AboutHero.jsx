import React, { useEffect } from "react";
import classes from "./AboutHero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={classes.aboutHeroContainer}>
      <div className={classes.aboutHeroWrapper} data-aos="fade-right">
        <h1>About Us</h1>
        <p>Home - About</p>
      </div>
    </div>
  );
};

export default AboutHero;
