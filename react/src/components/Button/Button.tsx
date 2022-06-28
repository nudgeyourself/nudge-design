import React from "react";
import "./Button.scss";
import tokens from "../tokens";

const enum buttonStyle {
  DEFAULT = "default",
  PRIMARY = "primary",
  CRITICAL = "critical",
}

export interface ButtonProps {
  label: string;
  style: buttonStyle;
  shadow: boolean;
  small: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${props.style} ${props.shadow && "shadow"} ${
        props.small && "small"
      }`}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  style: buttonStyle.DEFAULT,
  shadow: true,
  small: false,
};

export { buttonStyle, Button };
export default Button;
