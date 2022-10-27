import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { Plus, Calendar } from "@nudge-coach/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};

export const Destructive = Template.bind({});
Destructive.args = {
  destructive: true,
};

export const SmallImpliedIcon = (args) => (
  <Button {...args}>
    <Calendar />
  </Button>
);

SmallImpliedIcon.args = {
  small: true,
  implied: true,
};

export const LabeledIcon = (args) => (
  <Button {...args}>
    <span>Labeled Icon</span>
  </Button>
);
