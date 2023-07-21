import React from "react";
import "./PlHome.sass";
import Page from "frontend/components/common/Page/Page";
import Container from "frontend/components/common/Container/Container";
import ActiveArea from "../components/ActiveArea/ActiveArea";

const PlHome = () => {
  return (
    <Page pageType="platform" id="platform-home-page">
      <Container>
        <ActiveArea />
      </Container>
    </Page>
  );
};

export default PlHome;
