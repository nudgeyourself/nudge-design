import React from "react";
import "../global.css";
import styles from "./Badge.module.css";

export interface BadgeProps {
  children: React.ReactNode;
  warning?: boolean;
  success?: boolean;
  word?: boolean;
}

const Badge = (props: BadgeProps) => {
  return (
    <div
      className={`${styles.badge} ${props.warning ? styles.warning : ""} ${
        props.success ? styles.success : ""
      } ${props.word ? styles.word : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Badge;
