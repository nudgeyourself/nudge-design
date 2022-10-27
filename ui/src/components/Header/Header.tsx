import React from "react";
import "../global.css";
import "../../../../tokens/build/web/variables.css";
import styles from "./Header.module.css";
import HeaderAction from "../HeaderAction/HeaderAction";
import { X } from "@nudge-coach/icons";

export interface HeaderProps {
  title?: string;
  onClickClose?: () => {};
  rightActions?: [];
  leftActions?: [];
  shadow?: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <div className={`${styles.header} ${props.shadow ? styles.shadow : ""}`}>
      <div className={`${styles.leftActions}`}>
        {props.leftActions ? (
          props.leftActions
        ) : (
          <HeaderAction
            onClick={() => {
              props.onClickClose();
            }}
          >
            <X />
          </HeaderAction>
        )}
      </div>
      {props.title && <div className={`${styles.title}`}>{props.title}</div>}
      <div className={`${styles.rightActions}`}>{props.rightActions}</div>
    </div>
  );
};

Header.defaultProps = {
  onClickClose: () => {},
};

export default Header;
