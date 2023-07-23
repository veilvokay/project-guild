import React from "react";
import "./Page.sass";
import PlatformNavbar from "frontend/platform/components/Navbar/PlatformNavbar";
import Container from "../Container/Container";
import ActiveArea from "frontend/platform/components/ActiveArea/ActiveArea";

interface IPageProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  pageType: "main" | "website" | "platform";
  pageClass?: string;
}

const Page = ({
  pageType,
  pageClass,
  children,
  ...rest
}: IPageProps): JSX.Element => {
  const className = `page page-${pageType} ${pageClass ? pageClass : ""}`;
  const renderNav = () => {
    switch (pageType) {
      case "main":
        return <></>;
      case "website":
        return <></>;
      case "platform":
        return <PlatformNavbar />;
      default:
        return <></>;
    }
  };
  return (
    <>
      {renderNav()}
      {pageType === "platform" ? (
        <div className={className} {...rest}>
          <Container>
            <ActiveArea>{children}</ActiveArea>
          </Container>
        </div>
      ) : (
        <div className={className} {...rest}>
          {children}
        </div>
      )}
    </>
  );
};

export default Page;
