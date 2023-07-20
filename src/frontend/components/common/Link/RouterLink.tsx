import React from "react";
import "./RouterLink.sass";
import { Link, LinkProps } from "react-router-dom";

interface IRouterLink extends Omit<LinkProps, "className"> {
  linkClass?: string;
  goToName: string;
}

const RouterLink = (props: IRouterLink) => {
  const { linkClass, goToName, ...rest } = props;
  const className = `router-link desc-1 ${linkClass ? linkClass : ""}`;
  return (
    <Link className={className} {...rest}>
      {goToName}
    </Link>
  );
};

export default RouterLink;
