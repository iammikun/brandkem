import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div
      className={`${classes.headerContainer} ${
        isScrolled ? classes.scrolled : ""
      }`}
    >
      <div className={classes.headerWrapper} data-aos="fade-down">
        <Link to="/">
          <h3>BrandKemistry</h3>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="our-team">Our Team</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
