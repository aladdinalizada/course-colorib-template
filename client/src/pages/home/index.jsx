import React from "react";
import { Helmet } from "react-helmet";
import PopularCurses from "../popular-courses";
import SearchRegister from "../serach-and-register";
import Services from "../services";
import SliderHero from "../silder-hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Course</title>
      </Helmet>
      <SliderHero />
      <PopularCurses />
      <SearchRegister />
      <Services />
    </div>
  );
};

export default Home;
