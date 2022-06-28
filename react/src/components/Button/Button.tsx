import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  onClick: () => {};
  primary?: boolean;
  implied?: boolean;
  destructive?: boolean;
  small?: boolean;
  stacked?: boolean;
  expanded?: boolean;
  disabled?: boolean;
}

const setClasses = (props: ButtonProps) => {
  return `${props.primary ? "primary " : ""}${props.implied ? "implied " : ""}${
    props.destructive ? "destructive " : ""
  }${props.small ? "small " : ""}${props.expanded ? "expanded " : ""}${
    props.expanded ? "stacked " : ""
  }`.trim();
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={setClasses(props)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  label: "Button",
  onClick: () => {},
};

export default Button;
