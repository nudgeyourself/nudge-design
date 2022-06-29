import React from "react";
import styles from "./Button.module.scss";

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
  return `${styles.button} ${props.primary ? styles.primary : ""}${
    props.implied ? styles.implied : ""
  }${props.destructive ? styles.destructive : ""}${
    props.small ? styles.small : ""
  }${props.expanded ? styles.expanded : ""}${
    props.stacked ? styles.stacked : ""
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
