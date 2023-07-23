import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "frontend/AppRoutes";
import PlHome from "./pages/PlHome/PlHome";
import PlMyStats from "./pages/PlMyStats/PlMyStats";
import PlMyParty from "./pages/PlMyParty/PlMyParty";
import PlGuildStats from "./pages/PlGuildStats/PlGuildStats";

const PlRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoutes.PL_HOME} element={<PlHome />} />
      <Route path={AppRoutes.PL_MY_STATS} element={<PlMyStats />} />
      <Route path={AppRoutes.PL_MY_PARTY} element={<PlMyParty />} />
      <Route path={AppRoutes.PL_GUILD_STATS} element={<PlGuildStats />} />
    </Routes>
  );
};

export default PlRoutes;
