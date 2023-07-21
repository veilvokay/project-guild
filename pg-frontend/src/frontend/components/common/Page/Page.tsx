import React from "react";
import "./Page.sass";
import PlatformNavbar from "frontend/platform/components/Navbar/PlatformNavbar";

interface IPageProps extends React.HTMLAttributes<HTMLDivElement> {
  pageType: "main" | "website" | "platform";
}

const Page = ({ pageType, children, ...rest }: IPageProps): JSX.Element => {
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
      <div className="page" {...rest}>
        {children}
      </div>
    </>
  );
};

export default Page;
