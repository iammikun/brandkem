import React, { useState, useEffect, useCallback, useRef } from "react";
import "./TeamCarousel.css";

import wale from "../../../../../images/wale.jpg";
import teamMember1 from "../../../../../images/teamMember1.jpg";
import teamMember2 from "../../../../../images/teamMember2.jpg";
import teamMember3 from "../../../../../images/teamMember3.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Adeleke Akanbi",
    role: "COO / Operations Lead",
    image: wale,
    bio: "An astute marketing professional with over 15 years managing events and activations for FMCG brands across Nigeria. MBA in Marketing (LAUTECH); certified Associate member of ARCON. Leads work for Goldberg, JTI, Life Beer, Dangote Flour, Fayrouz, Nigerian Breweries and Frapapa Bet.",
  },
  {
    name: "Emmanuel Williams-Ugbebor",
    role: "Creative · Strategy",
    image: teamMember1,
    bio: "A visualizer par excellence with an enviable portfolio of captivating graphic designs. Economics graduate of Lagos State University; deep experience across FMCG, banking, oil & gas, telecoms and hospitality — Dangote Cement, Fayrouz, Goldberg, Samsung and many more.",
  },
  {
    name: "Kofoworola Olagunju",
    role: "Head, Activations / Experiential",
    image: teamMember2,
    bio: "Marketing communications expert with over 13 years experience in brand building and activations spanning FMCG, banking and public sector. Holds a degree in Electrical Engineering. Former Trade/Channel Manager at NIVEA.",
  },
  {
    name: "Mercy Ogbumu",
    role: "Account Manager",
    image: teamMember3,
    bio: "Self-motivated account manager with 8+ years in client relationship management. Has worked on Colgate-Palmolive, LG Electronics, Union Bank, Samsung and more. Associate member of APCON.",
  },
  {
    name: "Aladegoroye Tiwalade",
    role: "Admin Manager",
    image: teamMember1,
    bio: "A dynamic, experienced personality who oversees the smooth daily running of the company — ensuring compliance across operations, management and overall employee welfare.",
  },
  {
    name: "Segun Ajayi",
    role: "Head of Finance",
    image: teamMember2,
    bio: "Finance expert with over a decade of experience in accounting, auditing and taxation, having worked in different financial-management capacities both locally and internationally.",
  },
  {
    name: "Seyi Adenusi",
    role: "Experiential Manager",
    image: teamMember3,
    bio: "An astute experiential manager with a proven track record across production, marketing communications, experiential and consumer engagement.",
  },
];

const PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(teamMembers.length / PER_PAGE);
const INTERVAL = 4500;

const TeamCarousel = () => {

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);

  const goTo = useCallback((n) => {
    setPage(((n % TOTAL_PAGES) + TOTAL_PAGES) % TOTAL_PAGES);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % TOTAL_PAGES);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    if (!paused) resetTimer();
    else clearInterval(timerRef.current);

    return () => clearInterval(timerRef.current);
  }, [paused, resetTimer]);

  const visible = teamMembers.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE
  );

  return (
    <section
      className="tc-section"
      data-aos="fade-up"
    >
      <div className="tc-inner">

        <div
          className="tc-header"
          data-aos="fade-right"
        >
          <h2
            className="tc-title"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Meet the team
          </h2>

          <p
            className="tc-desc"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Brand consultants, creative directors, activation experts and strategists —
            united by one goal: your brand's success.
          </p>
        </div>

        <div
          className="tc-grid"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((member, idx) => (
            <div
              className="tc-card"
              key={page + "-" + idx}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 150}
            >
              <div className="tc-photo-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="tc-photo"
                />

                <div className="tc-photo-overlay" />
              </div>

              <div className="tc-body">
                <h3
                  className="tc-name"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {member.name}
                </h3>

                <p
                  className="tc-role"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {member.role}
                </p>

                <p
                  className="tc-bio"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="tc-controls"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button
            className="tc-arrow"
            onClick={() => {
              goTo(page - 1);
              resetTimer();
            }}
            aria-label="Previous"
          >
            &#8592;
          </button>

          <div className="tc-dots">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                className={"tc-dot" + (i === page ? " active" : "")}
                onClick={() => {
                  goTo(i);
                  resetTimer();
                }}
                aria-label={"Page " + (i + 1)}
              />
            ))}
          </div>

          <button
            className="tc-arrow"
            onClick={() => {
              goTo(page + 1);
              resetTimer();
            }}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

      </div>
    </section>
  );
  
};

export default TeamCarousel;