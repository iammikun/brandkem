import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterWrapper}>
        <div>
          <h3>Kindly follow and like us</h3>
          <div className={classes.social}>
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <FaSquareInstagram />
            <FaYoutube />
          </div>
        </div>
        <div>
          <h3>Opening Hours</h3>
          <div className={classes.cont}>
            <p>Monday – Friday: 8:00 am – 5:00 pm</p>
            <p>Saturday & Sunday: CLOSED</p>
          </div>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div className={classes.cont}>
            <p>15, Asiata Solarin Cresent, Olusosun Lagos</p>
            <p>+23460535212</p>
            <p>email: brandkemistry@gmail.com</p>
          </div>
        </div>
        <div>
          <h3>Instagram</h3>
        </div>
      </div>
      <hr />
      <p className={classes.copy}>
        2024 © BrandKemistry, All rights reserved .
      </p>
    </div>
  );
};

export default Footer;
