import React from "react";
import { Route, Routes } from "react-router-dom";
import WebHome from "./pages/Home/WebHome";

const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/website-home" element={<WebHome />} />
    </Routes>
  );
};

export default WebRoutes;
