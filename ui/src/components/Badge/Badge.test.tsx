import React from "react";
import { render } from "@testing-library/react";

import Badge from "./Badge";

describe("Badge", () => {
  test("renders the Button component", () => {
    render(<Badge>Button</Badge>);
  });
});
