import React from "react";
import "../global.css";
import "../../../../tokens/build/web/variables.css";
import styles from "./HeaderAction.module.css";
import Badge from "../Badge/Badge";
import { Calendar, Unlock } from "@nudge-coach/icons";

export interface HeaderActionProps {
  children: React.ReactNode;
  onClick: () => {};
  selectable?: boolean;
  selected?: boolean;
  circleIcon?: boolean;
  disabled?: boolean;
  badgeCount: number;
  warning?: boolean;
  padding?: boolean;
}

const HeaderAction = (props: HeaderActionProps) => {
  return (
    <button
      className={`${styles.headerAction} ${
        props.selectable ? styles.selectable : ""
      } ${props.selectable && props.selected ? styles.selected : ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <div
        className={`${styles.hoverBg} ${props.padding ? styles.padding : ""}`}
      >
        {props.warning ? (
          <div className={`${styles.badge}`}>
            <Badge warning>!</Badge>
          </div>
        ) : props.badgeCount > 0 ? (
          <div className={`${styles.badge}`}>
            <Badge>{props.badgeCount}</Badge>
          </div>
        ) : (
          ""
        )}
        <div
          className={`${styles.content} ${
            props.circleIcon ? styles.circle : ""
          }`}
        >
          {props.children}
        </div>
      </div>
    </button>
  );
};

HeaderAction.defaultProps = {
  children: "HeaderAction",
  onClick: () => {},
  badgeCount: 0,
};

export default HeaderAction;
