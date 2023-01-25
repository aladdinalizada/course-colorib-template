import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Routing;
