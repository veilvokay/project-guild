import React from "react";

interface IContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  containerClass?: string;
}

const Container = (props: IContainerProps) => {
  const { containerClass, children, ...rest } = props;
  const className = `container ${containerClass ? containerClass : ""}`;
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Container;
