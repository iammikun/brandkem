import React, { useEffect } from "react";
import classes from "./Partners.module.css";
import coca from "../../../../Images/coca.jpg";
import samsung from "../../../../Images/samsung.jpg";
import foam from "../../../../Images/foam.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Partners = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.partnersContainer} data-aos="fade-down">
      <div className={classes.partnersWrapper}>
        <h3>Our Partners</h3>
        <div className={classes.partners}>
          <img src={coca} alt="" />
          <img src={samsung} alt="" />
          <img src={foam} alt="" />
          <img src={coca} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
