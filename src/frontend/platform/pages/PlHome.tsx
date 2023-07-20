import React from "react";
import "./PlHome.sass";
import Page from "frontend/components/common/Page/Page";
import Container from "frontend/components/common/Container/Container";

const PlHome = () => {
  return (
    <Page id="platform-home-page">
      <Container>
        <h1 className="title-h1">Platform</h1>
      </Container>
    </Page>
  );
};

export default PlHome;
