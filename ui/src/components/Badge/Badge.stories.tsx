import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "./Badge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>1</Badge>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {};

export const Word = (args) => <Badge {...args}>New</Badge>;
Word.args = { word: true };

export const Warning = (args) => <Badge {...args}>!</Badge>;
Warning.args = { warning: true };
