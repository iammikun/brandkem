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
            BrandKemistry comes with ambitious creative community of talents,
            providing best solutions OTIF from planning to implementation. We
            are pleased to introduce our organization and offer ourselves to
            serve; our definition of service being to grow your business and
            increase your return on investment (ROI).
          </p>
        </div>
      </div>
      <Link to="">
        <button className={classes.whoBtn} data-aos="fade-down">
          About Us➡
        </button>
      </Link>
    </div>
  );
};

export default Who;
