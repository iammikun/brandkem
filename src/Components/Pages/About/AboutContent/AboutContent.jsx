import React, { useEffect } from "react";
import classes from "./AboutContent.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.contentContainer}>
      <div className={classes.contentWrapper}>
        <div>
          <h4>
            About <span>BrandKemistry</span>
          </h4>
          <p data-aos="fade-down">
            BrandKemstry is an Integrated Marketing- Communications firm with
            ambitious creative community of talents, providing best solutions
            OTIF from planning to implementation. We are pleased to introduce
            our organization and offer ourselves to serve; our definition of
            service being to grow your business and increase your return on
            investment (ROI). We assert ourselves as the new SUPPORT systems for
            marketing and marketers clear directions for building strong brands
            and keeping them fresh and relevant.
          </p>
          <p data-aos="fade-down">
            We are technologically driven in our approach to challenges relating
            to accuracy in measuring of feedbacks, marketing activation impacts
            and the effective control of marketing elements, including the role
            of human capital in addressing marketing tasks.
          </p>
          <Link to="/contact-us">
            <button className={classes.groupBtn}>Send a proposal</button>
          </Link>
        </div>
      </div>
      <hr />

      <div className={classes.contentWrapper}>
        <h4>
          Our <span>Core Values</span>
        </h4>
        <div className={classes.valueBox}>
          <div className={classes.box}>
            <h4 data-aos="fade-down">We Deliver</h4>
            <p>
              <p data-aos="fade-down">
                BRANDKEMISTRY delivers the ideas, products and proprietary tools
                you need to achieve maximum clarity in your message and adapt
                these to the demands of a changing environment.
              </p>
            </p>
          </div>
          <div className={classes.box}>
            <h4 data-aos="fade-down"> We Amplify</h4>
            <p>
              <p data-aos="fade-down">
                We amplify your brand identity and products using factors
                tailored to your specific needs for a holistic brand experience
                geared at taking your brand to the next level.
              </p>
            </p>
          </div>
          <div className={classes.box}>
            <h4 data-aos="fade-down">We Disrupt</h4>
            <p>
              <p data-aos="fade-down">
                Our approach applies disruptive creativity to help brands stand
                out and occupy lasting space in the minds of customers and
                recruits.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
