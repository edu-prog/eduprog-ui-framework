import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../Button";
import Avatar from "@components/Avatar/Avatar";
import Spinner from "@components/Spinner/Spinner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Button/Playground",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: "Button",
  contentLeft: <Avatar size="sm" rounded text="Vasily Sviridov"/>,
  contentRight: <Spinner color="primary" mode="growing"/>
};
