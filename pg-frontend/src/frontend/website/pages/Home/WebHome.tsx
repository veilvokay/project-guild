import React from "react";
import "./WebHome.sass";
import Page from "frontend/components/common/Page/Page";
import Container from "frontend/components/common/Container/Container";

const WebHome = () => {
  return (
    <Page pageType="website" id="website-page">
      <Container>
        <h1 className="title-h1">Website</h1>
      </Container>
    </Page>
  );
};

export default WebHome;
