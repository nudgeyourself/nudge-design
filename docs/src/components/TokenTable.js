import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import tokens from "../../../tokens/build/web/tokens";

const ColorSwatch = (obj) => {
  return (
    <div
      style={{
        width: "var(--core-size-4)",
        height: "var(--core-size-4)",
        borderRadius: "var(--core-size-4)",
        backgroundColor: obj.value,
        display: "inline-block",
      }}
    ></div>
  );
};

const TokenTable = () => {
  const [parsedTokens, setParsedTokens] = useState([]);

  function parseTokens(obj, arr) {
    for (var k in obj) {
      if (
        typeof obj[k] === "object" &&
        obj[k] !== null &&
        !obj.hasOwnProperty("name") &&
        !obj.hasOwnProperty("value")
      ) {
        parseTokens(obj[k], arr);
      } else {
        arr.push(obj);
        break;
      }
    }
  }

  useEffect(() => {
    var pt = [];
    parseTokens(tokens, pt);
    setParsedTokens(pt);
  }, []);

  return (
    <table>
      <tr>
        <td>Name</td>
        <td>Value</td>
        <td>Demo</td>
      </tr>
      {parsedTokens.map((obj) => {
        return (
          <tr>
            <td>{obj.name}</td>
            <td>{obj.value}</td>
            <td>
              {obj.type === "color" ? <ColorSwatch value={obj.value} /> : "-"}
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default TokenTable;
