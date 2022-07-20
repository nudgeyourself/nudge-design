import React from "react";
import { render } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  test("renders the Button component", () => {
    render(<ButtonGroup />);
  });
});