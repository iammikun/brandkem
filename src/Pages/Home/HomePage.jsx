import React from "react";
import Partners from "../../Components/Pages/Home/Partners/Partners";
import Who from "../../Components/Pages/Home/Who/Who";
import Services from "../../Components/Pages/Home/Services/Services";
import GetInTouch from "../../Components/Pages/Home/GetInTouch/GetInTouch";
import Team from "../../Components/Pages/Home/Team/Team";
import Hero from "../../Components/Pages/Home/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <div>
        <Hero />
        <Partners />
        <Who />
        <Services />
        <Team />
        <GetInTouch />
      </div>
    </div>
  );
};

export default HomePage;
