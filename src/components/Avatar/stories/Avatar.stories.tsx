import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "../src/Avatar";

export default {
  title: "Murphy UI/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: "Harvey Specter",
  src: "http://mylenebeaudoin.com/wp-content/uploads/2019/07/suits_cast_harvey_s8.jpg",
  background: "red-500",
};
