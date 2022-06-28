import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, buttonStyle } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  style: buttonStyle.PRIMARY,
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  small: true,
};

export const Critical = Template.bind({});
Critical.args = {
  label: "Primary Button",
  style: buttonStyle.CRITICAL,
};
