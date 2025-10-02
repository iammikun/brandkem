import React from "react";
import classes from "./TeamContent.module.css";

const TeamContent = () => {
  return (
    <div className={classes.teamContentContainer}>
      <div className={classes.teamContentWrapper}>
        <p>
          Our people come from diverse backgrounds and a wide range of job and
          life experiences. We have professionals from specified fields working
          together to create winning and supportive cooperate culture. Our work
          speaks for us; and we manage to have FUN even as we are working really
          hard.
        </p>
        <div className={classes.team}></div>
        <h3>Meet Our Team</h3>
        <p>
          We are greatly inspired team of brand sciencists full of ideas,
          creativity and energy.
        </p>
      </div>
    </div>
  );
  
};

export default TeamContent;
