import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home/Home";
import Product from "./Product/Product";

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default Pages;
