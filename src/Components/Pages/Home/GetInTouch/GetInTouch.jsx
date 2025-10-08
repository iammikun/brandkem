import React, { useEffect } from "react";
import classes from "./GetInTouch.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.GetInTouchContainer}>
      <div className={classes.GetInTouchWrapper} data-aos="fade-down">
        <div>
          <h3>Get In Touch</h3>
          <p className={classes.bold}>Let's Work Together</p>
        </div>
        <div className={classes.form}>
          <form action="">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="number" placeholder="Phone Number" />
            <textarea placeholder="Your Message" id=""></textarea>
          </form>
          <Link to="/">
            <button className={classes.button}>Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
