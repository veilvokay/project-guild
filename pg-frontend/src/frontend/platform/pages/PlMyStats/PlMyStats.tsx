import React from "react";
import Page from "frontend/components/common/Page/Page";
import Container from "frontend/components/common/Container/Container";
import ActiveArea from "frontend/platform/components/ActiveArea/ActiveArea";

const PlMyStats = () => {
  return (
    <Page pageType="platform" pageClass="platform-my-stats-page">
      <Container>
        <ActiveArea />
      </Container>
    </Page>
  );
};

export default PlMyStats;
