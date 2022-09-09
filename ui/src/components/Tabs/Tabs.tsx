import React from "react";
import "../global.css";
import "../../../../tokens/build/web/variables.css";
import styles from "./Tabs.module.css";

export interface TabsProps {
  titles: string;
  selected: string;
  tabSelected: (tab) => {};
  expanded?: boolean;
  margin?: boolean;
}

const Tabs = (props: TabsProps) => {
  const tabTitles = props.titles.split(",");
  return (
    <div
      className={`${styles.tabs} ${props.expanded ? styles.expanded : ""} ${
        props.margin ? styles.margin : ""
      }`}
    >
      {tabTitles.map((tab) => (
        <div
          key={tab}
          className={`${styles.tab} ${
            props.selected === tab ? styles.selected : ""
          } ${props.expanded ? styles.expanded : ""}`}
          onClick={() => {
            tabSelected(tab);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
