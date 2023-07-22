import React from "react";
import "./Page.sass";
import PlatformNavbar from "frontend/platform/components/Navbar/PlatformNavbar";

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
  const className = `page ${pageClass ? pageClass : ""}`;
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
      <div className={className} {...rest}>
        {children}
      </div>
    </>
  );
};

export default Page;
