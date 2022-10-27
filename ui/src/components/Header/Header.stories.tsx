import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";
import HeaderAction from "../HeaderAction/HeaderAction";
import { Menu, Message, FileText } from "@nudge-coach/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}></Header>
);

export const Default = Template.bind({});
Default.args = {
  title: "Title",
};

export const Actions = Template.bind({});
Actions.args = {
  title: "Header With Actions",
  rightActions: [
    <HeaderAction>
      <Menu />
    </HeaderAction>,
  ],
};

export const LeftAlignedTabs = Template.bind({});
LeftAlignedTabs.args = {
  leftActions: [
    <HeaderAction hoverLabel="Messages" selectable selected>
      <Message />
    </HeaderAction>,
    <HeaderAction hoverLabel="Notes" selectable>
      <FileText />
    </HeaderAction>,
  ],
  shadow: true,
};
