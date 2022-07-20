import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args}>
    <Button expanded />
    <Button expanded />
    <Button expanded />
  </ButtonGroup>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {};

export const Row = (args) => 
  <ButtonGroup {...args}>
    <Button />
    <Button />
    <Button />
  </ButtonGroup>
;

Row.args = {
  row: true,
}

