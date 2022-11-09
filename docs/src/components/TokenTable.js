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
        border: "1px solid var(--semantic-border-default)",
      }}
    ></div>
  );
};

const FontExample = (props) => {
  const { obj } = props;
  return (
    <div
      style={{
        fontSize:
          obj.type === "fontSizes" ? obj.value : "var(--core-font-size-2)",
        fontWeight:
          obj.type === "fontWeights" ? obj.value : "var(--core-font-weight-2)",
      }}
    >
      Aa
    </div>
  );
};

const SizeBox = (props) => {
  const { size } = props;
  return (
    <div
      style={{
        display: "inline-block",
        width: size,
        height: size,
        border: "1px solid var(--core-color-black)",
        borderStyle: "dashed",
      }}
    ></div>
  );
};

const TokenTable = (props) => {
  const [parsedTokens, setParsedTokens] = useState([]);
  const { category } = props;

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
    if (category) {
      parseTokens(tokens[category], pt);
    } else {
      parseTokens(tokens, pt);
    }

    setParsedTokens(pt);
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Value</td>
          <td>Demo</td>
        </tr>
        {parsedTokens.map((obj, i) => {
          return (
            <tr key={i.toString()}>
              <td>{obj.name}</td>
              <td>{obj.value}</td>
              <td>
                {obj.type === "color" ? (
                  <ColorSwatch value={obj.value} />
                ) : obj.type === "sizing" || obj.type === "spacing" ? (
                  <SizeBox size={obj.value} />
                ) : obj.type === "fontWeights" || obj.type === "fontSizes" ? (
                  <FontExample obj={obj} />
                ) : (
                  "-"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TokenTable;
