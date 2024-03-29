import React from "react";
import "../global.css";
import styles from "./Tabs.module.css";

export interface Tab {
  id: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  selected: string;
  highlighted?: string;
  tabSelected: (id) => {};
  expanded?: boolean;
  margin?: boolean;
}

const Tabs = (props: TabsProps) => {
  return (
    <div
      className={`${styles.tabs} ${props.expanded ? styles.expanded : ""} ${
        props.margin ? styles.margin : ""
      }`}
    >
      {props.tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tab} ${
            props.selected === tab.id ? styles.selected : ""
          } ${props.highlighted === tab.id ? styles.highlighted : ""} ${
            props.expanded ? styles.expanded : ""
          }`}
          onClick={() => {
            props.tabSelected(tab.id);
          }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
