import React from "react";
import { render } from "@testing-library/react";

import Badge from "./Badge";
import Button from "../Button/Button";

describe("Badge", () => {
  test("renders the Button component", () => {
    render(
      <Badge>
        <Button>Button</Button>
      </Badge>
    );
  });
});
