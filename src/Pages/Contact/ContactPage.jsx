import React, { useEffect } from "react";
import ContactForm from "../../Components/Pages/Contact/ContactForm/ContactForm";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import "./ContactPage.css";

import AOS from "aos";
import "aos/dist/aos.css";

const contactDetails = [
  {
    icon: <FiMapPin size={18} />,
    label: "Address",
    value: "15 Asiata Solarin Crescent, Olusosun, Oregun Ikeja, Lagos",
  },
  {
    icon: <FiPhone size={18} />,
    label: "Phone",
    value: "08120504913 / 08022950570",
  },
  {
    icon: <FiMail size={18} />,
    label: "Email",
    value: "brandkemistry@gmail.com",
  },
];

const ContactPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);

  return (
    <div className="bk-contact-page">

      {/* Hero */}
      <div className="contact-hero">

        <div
          className="contact-hero-inner"
          data-aos="fade-left"
        >
          <span
            className="contact-section-tag"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Get in touch
          </span>

          <h1
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Let's talk about
            <br />
            your brand
          </h1>

          <p
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Ready to take your brand to the next level? Fill in the form and
            we'll get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="contact-content">

        <div
          className="contact-info-col"
          data-aos="fade-right"
        >
          <h2 className="info-heading">Contact information</h2>

          <p
            className="info-intro"
            data-aos="fade-down"
          >
            We're based in Lagos, Nigeria and work with brands across West Africa.
            Reach out to start a conversation.
          </p>

          <div className="contact-details">
            {contactDetails.map((d, i) => (
              <div
                className="contact-detail-item"
                key={d.label}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <span
                  className="contact-detail-icon"
                  aria-hidden="true"
                >
                  {d.icon}
                </span>

                <div>
                  <div className="contact-detail-label">{d.label}</div>
                  <div className="contact-detail-val">{d.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="contact-tagline"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <em>"Brutal simplicity in everything we do."</em>
          </div>
        </div>

        <div
          className="contact-form-col"
          data-aos="fade-left"
        >
          <div className="form-card">
            <h2 className="form-heading">Send us a message</h2>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;