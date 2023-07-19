import React from "react";
import { Route, Routes } from "react-router-dom";
import PlHome from "./pages/PlHome";

const PlRoutes = () => {
  return (
    <Routes>
      <Route path="/pl-home" element={<PlHome />} />
    </Routes>
  );
};

export default PlRoutes;
