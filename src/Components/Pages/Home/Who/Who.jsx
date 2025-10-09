import React, { useEffect } from "react";
import classes from "./Who.module.css";
import who from "../../../../images/who.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Who = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.whoContainer}>
      <div className={classes.whoWrapper}>
        <img src={who} alt="" className={classes.img} data-aos="fade-right" />
        <div className={classes.whoText} data-aos="fade-left">
          <h3>Who We Are</h3>
          <h1>We are an integrated Marketing Communications firm</h1>
          <p>
            We're Brandkemistry, a marketing communications agency based in
            Lagos, Nigeria. We understand the importance of brand's storytelling
            that is meaningful to its consumers. We get to know them and their
            target audiences intimately, then we create, develop and communicate
            brands and their messages in an impactful and engaging way across
            media touch point.
          </p>
          <Link to="/about-us">
            <button className={classes.whoBtn}>Learn More ➡</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Who;
