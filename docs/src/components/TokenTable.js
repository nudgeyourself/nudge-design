import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import tokens from "../../../tokens/build/web/tokens";

const ColorSwatch = (props) => {
  const { color, shadow } = props;
  return (
    <div
      style={{
        width: "var(--core-size-4)",
        height: "var(--core-size-4)",
        borderRadius: "var(--core-size-4)",
        backgroundColor: color,
        display: "inline-block",
        border: shadow ? "0" : "1px solid var(--semantic-border-default)",
        boxShadow: shadow,
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

const Box = (props) => {
  const { size, radius } = props;
  return (
    <div
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: radius,
        border: "1px solid var(--core-color-black)",
        borderStyle: radius ? "solid" : "dashed",
      }}
    ></div>
  );
};

Box.defaultProps = {
  radius: 0,
  size: "var(--core-size-5)",
};

const Corner = (props) => {
  const { radius } = props;
  return (
    <div
      style={{
        display: "inline-block",
        width: "var(--core-size-4)",
        height: "var(--core-size-4)",
        borderTopLeftRadius: radius,
        borderLeft: "1px solid var(--core-color-black)",
        borderTop: "1px solid var(--core-color-black)",
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
                  <ColorSwatch color={obj.value} />
                ) : obj.type === "sizing" || obj.type === "spacing" ? (
                  <Box size={obj.value} />
                ) : obj.type === "borderRadius" ? (
                  <Corner radius={obj.value} />
                ) : obj.type === "boxShadow" ? (
                  <ColorSwatch
                    color="var(--core-color-white)"
                    shadow={obj.value}
                  />
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
