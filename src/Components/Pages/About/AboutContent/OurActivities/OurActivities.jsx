import React, { useEffect } from "react";
import classes from "./OurActivities.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const OurActivities = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.OurActivitiesContainer}>
      <div className={classes.OurActivitiesWrapper}>
        <h3>Our Activities</h3>
        <div className={classes.activitiesCards} data-aos="fade-down">
          <div className={classes.card} data-aos="fade-left">
            <h4>Brand Activation</h4>
          </div>
          <div className={classes.card} data-aos="fade-down">
            <h4>Concept Development</h4>
          </div>
          <div className={classes.card} data-aos="zoom-in">
            <h4>Events</h4>
          </div>
          <div className={classes.card} data-aos="fade-right">
            <h4>Design and Fabrication</h4>
          </div>
          <div className={classes.card} data-aos="fade-down">
            <h4>Prints</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
