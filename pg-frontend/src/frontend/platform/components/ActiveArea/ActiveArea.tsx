import React from "react";
import "./ActiveArea.sass";

interface IActiveAreaProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  activeAreaClass?: string;
}

const ActiveArea = (props: IActiveAreaProps) => {
  const { activeAreaClass, children, ...rest } = props;
  return (
    <div
      className={`pl-active-area ${activeAreaClass ? activeAreaClass : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ActiveArea;
