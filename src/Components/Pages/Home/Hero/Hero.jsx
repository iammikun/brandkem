// Hero.js
import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroWrapper} data-aos="fade-right">
        <h1>Amplifying your brand identity</h1>
      </div>
    </div>
  );
};

export default Hero;
