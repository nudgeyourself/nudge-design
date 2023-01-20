import React from "react";
import "../global.css";
import styles from "./HeaderAction.module.css";
import Badge from "../Badge/Badge";
import HoverTip from "../HoverTip/HoverTip";
import { Calendar, Unlock, Check } from "@nudge-coach/icons";

export interface HeaderActionProps {
  children: React.ReactNode;
  onClick: () => {};
  selectable?: boolean;
  selected?: boolean;
  toggled: boolean;
  circleIcon?: boolean;
  disabled?: boolean;
  badgeCount: number;
  warning?: boolean;
  success?: boolean;
  padding?: boolean;
  hoverLabel?: string;
}

const HeaderAction = (props: HeaderActionProps) => {
  return (
    <button
      className={`${styles.headerAction} ${
        props.selectable ? styles.selectable : ""
      } ${props.selectable && props.selected ? styles.selected : ""} ${
        props.toggled ? styles.toggled : ""
      }`}
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
        ) : props.success ? (
          <div className={`${styles.badge}`}>
            <Badge success>
              <Check />
            </Badge>
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
      {props.hoverLabel && <HoverTip>{props.hoverLabel}</HoverTip>}
    </button>
  );
};

HeaderAction.defaultProps = {
  children: "HeaderAction",
  onClick: () => {},
  badgeCount: 0,
};

export default HeaderAction;
