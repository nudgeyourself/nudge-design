import React from "react";
import { render } from "@testing-library/react";

import Tabs from "./Tabs";

describe("Tabs", () => {
  test("renders the Tabs component", () => {
    render(<Tabs titles="Tab 1,Tab 2,Tab 3" selected="Tab 1"></Tabs>);
  });
});
