import "./MainPage.sass";
import React from "react";
import Page from "./components/common/Page/Page";
import { AppRoutes, AppRoutesNames } from "./AppRoutes";
import RouterLink from "./components/common/Link/RouterLink";
import { useLocation } from "react-router-dom";
import Container from "./components/common/Container/Container";

const MainPage = () => {
  const location = useLocation();
  console.log(location, "location");

  return (
    <Page id="main-page">
      <Container containerClass="main-page-container">
        <RouterLink
          to={AppRoutes.WEB_HOME}
          goToName={AppRoutesNames[AppRoutes.WEB_HOME]}
        />
        <RouterLink
          to={AppRoutes.PL_HOME}
          goToName={AppRoutesNames[AppRoutes.PL_HOME]}
        />
      </Container>
    </Page>
  );
};

export default MainPage;
