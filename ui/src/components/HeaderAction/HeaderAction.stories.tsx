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
  <HeaderAction {...args}>{args.children}</HeaderAction>
);

export const Default = Template.bind({});
Default.args = {
  children: <X />,
};

export const Selected = Template.bind({});
Selected.args = {
  selectable: true,
  selected: true,
  children: <Users />,
};

export const Navigation = Template.bind({});
Navigation.args = {
  badgeCount: 3,
  circleIcon: true,
  selectable: true,
  children: <Users />,
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  iconStyle: "active",
  children: <Unlock />,
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  iconStyle: "active",
  children: <Unlock />,
};

export const Label = Template.bind({});
Label.args = {
  padding: true,
  selectable: true,
  children: "Month",
};
