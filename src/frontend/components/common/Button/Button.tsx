import React from "react";
import "./Button.sass";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
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
