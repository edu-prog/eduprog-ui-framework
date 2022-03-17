import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "@components/Select/Select/Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Select/Select/Playground",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Select",
  options: [
    {
      name: "5% - Аптеки",
      value: "5% - аптеки",
    },
    {
      name: "5% - Ozon.ru",
      value: "5% - ozon.ru",
    },
    {
      name: "3% - Пятёрочка",
      value: "fewfew",
    },
    {
      name: "5% - Спорттовары",
      value: "grewge",
    },
    {
      name: "5% - Такси",
      value: "fwegfewr",
    },
    {
      name: "5% - Рестораны",
      value: "fwergerr",
    },
  ],
};