import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "../pages/Home";
import Picked from "../pages/Picked";
import Signin from "../pages/Signin";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/picked" element={<Picked />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
