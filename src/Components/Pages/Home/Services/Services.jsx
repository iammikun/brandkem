import React, { useEffect } from "react";
import classes from "./Services.module.css";
import { MdOutlineSupport } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { MdSpeaker } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.servicesContainer} data-aos="fade-down">
      <div className={classes.serviceWrapper}>
        <h3>What We Do.</h3>
        <p></p>
        <div className={classes.serviceBox}>
          <div className={classes.box}>
            <MdOutlineSupport className={classes.icon} />
            <h4>First Class Experience</h4>
            <p>
              BRANDKEMISTRY is built on trust our clients have in us. The
              ultimate goal is to provide every client with that feeling. How do
              we do it? With a serious approach to work and with the orientation
              to results.
            </p>
          </div>
          <div className={classes.box}>
            <GrDeliver className={classes.icon} />
            <h4>Focus</h4>
            <p>
              It’s not easy to describe our team, so we’ll do it with a single
              word. Focus. It’s our fundamental guiding principle, and it’s
              enabling us to provide the first-class experience. Just try us.
            </p>
          </div>
          <div className={classes.box}>
            <MdSpeaker className={classes.icon} />
            <h4>Turning Things Around</h4>
            <p>
              Just because everybody does something one way, it doesn’t mean
              it’s the way to do it. That’s why our slogan is:“Turning things
              around”. The driving force behind our successful business story is
              in the strive for providing better results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
