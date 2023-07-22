import React from "react";
import "./PlatformNavbar.sass";
import RouterLink from "frontend/components/common/Link/RouterLink";
import Container from "frontend/components/common/Container/Container";
import { AppRoutes, AppRoutesNames } from "frontend/AppRoutes";

const PlatformNavbar = () => {
  return (
    <div className="platform-nav">
      <Container>
        <div className="platform-nav__wrapper">
          <p className="desc-2 platform-nav__name">Dashboard</p>
          <nav className="platform-nav__nav">
            <ul className="platform-nav__list">
              <li className="platform-nav__list-item desc-3">
                <RouterLink
                  linkType="inline"
                  to={AppRoutes.PL_MY_STATS}
                  goToName={AppRoutesNames[AppRoutes.PL_MY_STATS]}
                />
              </li>
              <li className="platform-nav__list-item desc-3">
                <RouterLink
                  linkType="inline"
                  to={AppRoutes.PL_MY_PARTY}
                  goToName={AppRoutesNames[AppRoutes.PL_MY_PARTY]}
                />
              </li>
              <li className="platform-nav__list-item desc-3">
                <RouterLink
                  linkType="inline"
                  to={AppRoutes.PL_GUILD_STATS}
                  goToName={AppRoutesNames[AppRoutes.PL_GUILD_STATS]}
                />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default PlatformNavbar;
