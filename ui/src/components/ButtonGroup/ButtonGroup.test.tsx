import React from "react";
import { render } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

describe("ButtonGroup", () => {
  test("renders the Button component", () => {
    render(<ButtonGroup><Button>Button</Button></ButtonGroup>);
  });
});