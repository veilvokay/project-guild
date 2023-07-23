import React from "react";
import "./RouterLink.sass";
import { Link, LinkProps } from "react-router-dom";

interface IRouterLink extends Omit<LinkProps, "className"> {
  linkClass?: string;
  linkType: "inline" | "button";
  goToName: string;
}

const RouterLink = (props: IRouterLink) => {
  const { linkClass, linkType, goToName, ...rest } = props;
  const className = `router-link router-link__${linkType} ${
    linkClass ? linkClass : ""
  }`;
  return (
    <Link className={className} {...rest}>
      {goToName}
    </Link>
  );
};

export default RouterLink;
