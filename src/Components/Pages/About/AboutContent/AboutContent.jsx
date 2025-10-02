import React, { useEffect } from "react";
import classes from "./AboutContent.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.contentContainer}>
      <div className={classes.contentWrapper}>
        <h3>We produce great ideas and build new world</h3>
        <div>
          <h4>Who We Are</h4>
          <p data-aos="fade-down">
            We are an Integrated Marketing- Communications firm with ambitious
            creative community of talents, providing best solutions OTIF from
            planning to implementation.
          </p>
          <p data-aos="fade-down">
            We are pleased to introduce our organization and offer ourselves to
            serve; our definition of service being to grow your business and
            increase your return on investment (ROI).
          </p>
        </div>
        <div>
          <h4 data-aos="fade-down">Our Specialities</h4>
          <p data-aos="fade-down">
            We assert ourselves as the new SUPPORT systems for marketing and
            marketers clear directions for building strong brands and keeping
            them fresh and relevant.
          </p>
          <p data-aos="fade-down">
            We are technologically driven in our approach to challenges relating
            to accuracy in measuring of feedbacks, marketing activation impacts
            and the effective control of marketing elements, including the role
            of human capital in addressing marketing tasks.
          </p>
        </div>
        <div>
          <h4 data-aos="fade-down">We Deliver</h4>
          <p data-aos="fade-down">
            BRANDKEMISTRY delivers the ideas, products and proprietary tools you
            need to achieve maximum clarity in your message and adapt these to
            the demands of a changing environment.
          </p>
          <p data-aos="fade-down">
            We help you create holistic experiences for your consumers with
            sensory, social and mind-blowing associations.
          </p>
        </div>
        <div>
          <h4 data-aos="fade-down"> We Amplify</h4>
          <p data-aos="fade-down">
            We amplify your brand identity and products using factors tailored
            to your specific needs for a holistic brand experience geared at
            taking your brand to the next level.
          </p>
          <p data-aos="fade-down">
            Our approach includes distruptive creative processes needed for
            differenciation and thereby occupy vital spaces in the minds of
            customers and recruits for effective demand of your products and
            services
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
