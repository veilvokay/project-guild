import React from "react";
import "./Button.sass";

interface IButton
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "className"> {
  btnClass?: string;
}

const Button = (props: IButton) => {
  const { btnClass, children, ...rest } = props;
  const className = `btn ${btnClass ? btnClass : ""}`;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
