import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Picked from "../pages/Picked";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/picked/:id" element={<Picked />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
