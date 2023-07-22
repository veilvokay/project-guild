import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../AppRoutes";
import WebHome from "./pages/Home/WebHome";

const WebRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoutes.WEB_HOME} element={<WebHome />} />
    </Routes>
  );
};

export default WebRoutes;
