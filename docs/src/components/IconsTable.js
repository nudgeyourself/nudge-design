import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import * as Icons from "@nudge-coach/icons";

const IconsTable = (props) => {
  console.log(Icons);

  return (
    <div>
      {Object.keys(Icons).map((obj, i) => {
        const Icon = Icons[obj];
        return (
          <div
            style={{
              width: 128,
              height: 128,
              display: "inline-block",
              textAlign: "center",
              fontSize: "var(--core-font-size-1)",
            }}
          >
            <Icon width={40} height={40} />
            <br />
            {obj}
          </div>
        );
      })}
    </div>
  );
};

export default IconsTable;
