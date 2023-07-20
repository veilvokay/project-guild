import "./MainPage.sass";
import React from "react";
import Page from "./components/common/Page/Page";
import Button from "./components/common/Button/Button";
import { AppRoutes, AppRoutesNames } from "./AppRoutes";
import RouterLink from "./components/common/Link/RouterLink";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
  console.log(location, "location");

  return (
    <Page id="main-page">
      <RouterLink to={AppRoutes.WEB_HOME} goToName={AppRoutesNames.Website} />
      <Button onClick={() => alert("to the website")}>To the Website</Button>
      <Button onClick={() => alert("to the platform")}>To the Platform</Button>
    </Page>
  );
};

export default MainPage;
