import React from "react";
import "../global.css";
import "../../../../tokens/build/web/variables.css";
import styles from "./ButtonGroup.module.css";

export interface ButtonGroupProps {
  children: React.ReactNode;
  row?: boolean;
  margin?: boolean;
}

const ButtonGroup = (props: ButtonGroupProps) => {
  return (
    <div
      className={`${styles.buttonGroup} ${props.row ? styles.row : ""} ${
        props.margin ? styles.margin : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default ButtonGroup;
