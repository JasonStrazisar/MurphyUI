import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Murphy UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: "Button",
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Button",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  size: "small",
};
