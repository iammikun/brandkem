import React, { useEffect } from "react";
import classes from "./GetInTouch.module.css";
import { Link } from "react-router-dom";
import group from "../../../../images/group.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.GetInTouchContainer}>
      <div className={classes.GetInTouchWrapper} data-aos="fade-down">
        <img src={group} alt="" />
        <h3>Get In Touch</h3>
        <p className={classes.bold}>
          Have any questions or enquiries? Or you want to work with us? Send us
          a message below
        </p>
        <a href="mailto:brandkemistry@gmail.com">
          <button className={classes.groupBtn}>Send a Mail</button>
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
