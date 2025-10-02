import React, { useState, useEffect } from "react";
import classes from "./Team.module.css";
import ourTeam from "../../../../images/ourTeam.jpg";
import { Link } from "react-router-dom";
import wale from "../../../../images/wale.jpg";
import teamMember1 from "../../../../images/teamMember1.jpg";
import teamMember2 from "../../../../images/teamMember2.jpg";
import teamMember3 from "../../../../images/teamMember3.jpg";

const Team = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [wale, teamMember1, teamMember2, teamMember3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.teamContainer}>
      <div className={classes.teamWrapper}>
        <h3>
          We are a greatly inspired team full of ideas, creativity, and energy
        </h3>
        <div className={classes.team}>
          <img src={ourTeam} alt="Our Team" className={classes.leftImage} />
          <img
            src={images[currentImage]}
            alt="Team Member"
            className={classes.rightImage}
          />
        </div>
        <Link to="our-team">
          <button className={classes.button}>Meet Our Team ➡</button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
