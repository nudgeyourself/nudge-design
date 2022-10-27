import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HoverTip from "./HoverTip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/HoverTip",
  component: Badge,
} as ComponentMeta<typeof HoverTip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HoverTip> = (args) => (
  <HoverTip {...args}>1</HoverTip>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {};

export const Word = (args) => <HoverTip {...args}>New</HoverTip>;
Word.args = { word: true };

export const Warning = (args) => <HoverTip {...args}>!</HoverTip>;
Warning.args = { warning: true };
