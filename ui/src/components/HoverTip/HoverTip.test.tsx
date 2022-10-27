import React from "react";
import { render } from "@testing-library/react";

import HoverTip from "./HoverTip";

describe("HoverTip", () => {
  test("renders the HoverTip component", () => {
    render(<HoverTip>Hover Tip</HoverTip>);
  });
});
