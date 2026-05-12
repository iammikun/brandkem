import React, { useEffect } from "react";
import "./AboutPage.css";
import AboutHero from "../../Components/Pages/About/About/AboutHero";
import Partners from "../../Components/Pages/Home/Partners/Partners";
import GetInTouch from "../../Components/Pages/Home/GetInTouch/GetInTouch";

import AOS from "aos";
import "aos/dist/aos.css";

const coreValues = [
  {
    title: "We Deliver",
    desc: "Brandkemistry delivers the ideas, products and proprietary tools you need to achieve maximum clarity in your message and adapt to a changing environment.",
  },
  {
    title: "We Amplify",
    desc: "Brandkemistry amplifies your brand identity using factors tailored to your specific needs for a holistic brand experience geared at taking your brand to the next level.",
  },
  {
    title: "We Disrupt",
    desc: "Brandkemistry's approach applies disruptive creativity to help brands stand out and occupy lasting space in the minds of customers.",
  },
];

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);

  return (
    <div className="about-page">
      <AboutHero />

      {/* Who we are */}
      <section className="about-who">
        <div className="about-container">
         

          <h2
            className="about-section-title"
            data-aos="fade-right"
          >
            About <span className="about-accent">BRANDKEMISTRY</span>
          </h2>

          <p
            className="about-body-text"
            data-aos="fade-down"
          >
            BRANDKEMISTRY is an Integrated Marketing-Communications firm with an ambitious
            creative community of talents, providing best solutions OTIF from planning to
            implementation. We are pleased to introduce our organization and offer ourselves
            to serve; our definition of service being to grow your business and increase
            your return on investment (ROI).
          </p>

          <p
            className="about-body-text"
            data-aos="fade-down"
          >
            We are technologically driven in our approach to challenges relating to accuracy
            in measuring feedbacks, marketing-activation impacts and the effective control of
            marketing elements, including the role of human capital in addressing marketing tasks.
          </p>

          <a
            href="/contact-us"
            className="about-cta-btn"
            data-aos="fade-up"
          >
            Send a proposal
          </a>
        </div>
      </section>

      <hr className="about-divider" />

      {/* Core values */}
      <section className="about-values">
        <div className="about-container">
          

          <h2
            className="about-section-title"
            data-aos="fade-right"
          >
            Our <span className="about-accent">Core Values</span>
          </h2>

          <div className="about-values-grid">
            {coreValues.map((v, i) => (
              <div
                className="about-value-card"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <GetInTouch />
    </div>
  );
};

export default AboutPage;