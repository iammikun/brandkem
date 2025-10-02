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
        <h3>Our Services</h3>
        <div className={classes.serviceBox}>
          <div className={classes.box}>
            <MdOutlineSupport className={classes.icon} />
            <h4>Support System</h4>
            <p>
              We assert ourselves as the new SUPPORT systems for marketing and
              marketers clear directions for building strong brands and keeping
              them fresh and relevant.
            </p>
          </div>
          <div className={classes.box}>
            <GrDeliver className={classes.icon} />
            <h4>Delivering Ideas</h4>
            <p>
              BRANDKEMISTRY delivers the ideas, products and proprietary tools
              you need to achieve maximum clarity in your message and adapt
              these to the demands of a changing environment.
            </p>
          </div>
          <div className={classes.box}>
            <MdSpeaker className={classes.icon} />
            <h4>We Amplify</h4>
            <p>
              We amplify your brand identity and products using factors tailored
              to your specific needs for a holistic brand experience geared at
              taking your brand to the next level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
