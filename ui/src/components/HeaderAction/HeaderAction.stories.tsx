import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderAction from "./HeaderAction";
import { Users, Unlock, X } from "@nudge-coach/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/HeaderAction",
  component: HeaderAction,
} as ComponentMeta<typeof HeaderAction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderAction> = (args) => (
  <HeaderAction {...args}>
    <Users />
  </HeaderAction>
);

export const Default = (args) => (
  <HeaderAction {...args}>
    <X />
  </HeaderAction>
);

export const Selected = Template.bind({});
Selected.args = {
  selectable: true,
  selected: true,
};

export const Navigation = Template.bind({});
Navigation.args = {
  badgeCount: 3,
  circleIcon: true,
  selectable: true,
};

export const Warning = (args) => (
  <HeaderAction {...args}>
    <Unlock />
  </HeaderAction>
);

Warning.args = {
  warning: true,
  iconStyle: "active",
};

export const Label = (args) => <HeaderAction {...args}>Month</HeaderAction>;

Label.args = {
  padding: true,
  selectable: true,
};
