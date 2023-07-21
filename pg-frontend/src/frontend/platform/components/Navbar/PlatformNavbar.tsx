import React from "react";
import "./PlatformNavbar.sass";
import RouterLink from "frontend/components/common/Link/RouterLink";

const PlatformNavbar = () => {
  return (
    <nav className="platform-nav">
      <ul className="platform-nav__list">
        <li className="platform-nav__list-item desc-2">
          <RouterLink to="/" goToName="1" />
        </li>
        <li className="platform-nav__list-item desc-2">
          <RouterLink to="/" goToName="1" />
        </li>
        <li className="platform-nav__list-item desc-2">
          <RouterLink to="/" goToName="1" />
        </li>
        <li className="platform-nav__list-item desc-2">
          <RouterLink to="/" goToName="1" />
        </li>
      </ul>
    </nav>
  );
};

export default PlatformNavbar;
