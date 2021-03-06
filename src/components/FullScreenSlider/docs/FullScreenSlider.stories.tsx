import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import FullScreenSlider from "../FullScreenSlider";
import Button from "@components/Button";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/FullScreenSlider",
  component: FullScreenSlider,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
} as ComponentMeta<typeof FullScreenSlider>;

const PlaygroundTemplate = () => {
  const [open, setOpen] = useState(false);

  const [data] = useState([
    <div
      key="1"
      style={{
        background:
          "url(https://res.cloudinary.com/dixvycrtj/image/upload/c_scale,q_60,w_1080,h_2340/v1654440501/stories/image_2022-06-05_17-46-15_rhti1s.webp) center center / cover no-repeat fixed",
        width: "100%",
        height: "100%",
      }}
    />,
    <div
      key="2"
      style={{
        background:
          "url(https://res.cloudinary.com/dixvycrtj/image/upload/c_scale,h_2340,q_60,w_1080/v1653508345/stories/image_2022-05-25_22-46-17-_1__dit2kv.webp) center center / cover no-repeat fixed",
        width: "100%",
        height: "100%",
      }}
    />,
  ]);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open</Button>
      <FullScreenSlider
        open={open}
        slides={data}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
