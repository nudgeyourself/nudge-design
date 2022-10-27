import React, { useEffect } from "react";
import ReactDOM, { createPortal } from "react-dom";
import "../global.css";
import "../../../../tokens/build/web/variables.css";
import styles from "./HoverTip.module.css";

const modalRoot = document.getElementById("portal");

const HoverTip = (props) => {
  const modalElement = document.createElement("div");

  // appends the modal to portal once modal's children are mounted and
  // removes it once we don't need it in the DOM anymore:
  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

  return createPortal(<div>{props.children}</div>, modalRoot);
};

export default HoverTip;
