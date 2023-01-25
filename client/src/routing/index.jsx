import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/details-page";
import Home from "../pages/home";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
