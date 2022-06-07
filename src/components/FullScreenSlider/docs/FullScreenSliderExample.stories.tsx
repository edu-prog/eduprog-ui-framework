import Button from "@components/Button";
import { ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import FullScreenSlider from "../FullScreenSlider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/FullScreenSlider/Example",
  component: FullScreenSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FullScreenSlider>;

export const Playground = () => {
  const [open, setOpen] = useState(false);

  const [data, _] = useState([
    {
      background: "https://i.imgur.com/HtsiRA0.png",
      bottom: {
        color: "#fff",
        heading: (
          <div style={{ fontSize: "2rem", color: "#fff", textAlign: "center" }}>
            Как правильно пить воду
          </div>
        ),
        text: (
          <div
            style={{
              fontSize: "1.5rem",
              padding: "0rem 1rem 1rem 1rem",
              color: "#fff",
            }}
          >
            В день надо выпивать 2,5–3,7 л мужчинам, 2–2,7 — женщинам. <br />
            <br />
            Стакан воды за 30 минут до завтрака — хорошая и полезная привычка.
          </div>
        ),
      },
    },
    {
      background: "https://i.imgur.com/chHggWE.png",
      bottom: {
        color: "#fff",
        heading: (
          <div style={{ fontSize: "2rem", color: "#fff", textAlign: "center" }}>
            Разнообразие рациона.
          </div>
        ),
        text: (
          <div
            style={{
              fontSize: "1.5rem",
              padding: "0rem 1rem 1rem 1rem",
              color: "#fff",
            }}
          >
            Чтобы снизить вес, не нужно питаться только кефиром и огурцами! Меню
            должно быть вкусным, полезным, разнообразным.
          </div>
        ),
      },
    },
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
