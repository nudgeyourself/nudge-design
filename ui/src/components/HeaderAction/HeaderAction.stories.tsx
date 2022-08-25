import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderAction from "./HeaderAction";
import { Users, Unlock } from "@nudge-coach/icons";

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

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

export const BadgeCount = Template.bind({});
BadgeCount.args = {
  badgeCount: 3,
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

export const Navigation = Template.bind({});
Navigation.args = {
  badgeCount: 3,
  iconStyle: "circle",
};
