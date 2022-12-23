import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Header from "./Header";
import Home from "../pages/Home";
import Picked from "../pages/Picked";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/picked" element={<Picked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
