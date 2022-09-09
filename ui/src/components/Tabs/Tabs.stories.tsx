import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "./Tabs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args}></Tabs>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  titles: "Tab 1,Tab 2,Tab 3",
  selected: "Tab 1",
};
