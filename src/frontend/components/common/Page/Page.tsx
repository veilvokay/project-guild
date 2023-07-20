import React from "react";
import "./Page.sass";

const Page = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <div className="page" {...rest}>
      {children}
    </div>
  );
};

export default Page;
