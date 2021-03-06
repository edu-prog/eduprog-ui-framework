// @ts-nocheck
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Notify } from "../Notification";
import Button from "@components/Button";
import NotificationBox, {
  INotificationBoxProps,
} from "../NotificationBox/NotificationBox";
import { NotificationPropsType } from "../NotificationItem";
import Error from "@icons/Error";

export default {
  title: "Components/Notification",
  component: NotificationBox,
} as ComponentMeta<typeof NotificationBox>;

type NotificationProps = NotificationPropsType & INotificationBoxProps;

const PlaygroundTemplate: ComponentStory<typeof NotificationBox> = (
  args: NotificationProps
) => {
  const showNotification = () => [
    Notify({
      title: args.title,
      content: args.content,
      icon: args.icon,
      hasCloser: args.hasCloser,
    }),
  ];

  return (
    <>
      <NotificationBox
        position={args.position}
        rootStyle={args.NotificationBoxRootStyle}
        autoCloseDelay={args.autoCloseDelay}
      />

      <div style={{ display: "grid", placeItems: "center" }}>
        <Button onClick={showNotification}>Open notification</Button>
      </div>
    </>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  NotificationBoxRootStyle: {
    zIndex: 10,
  },
  autoCloseDelay: 10000,
  title: "Documentation Example",
  content: (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa ullam aut
      reprehenderit sapiente veniam voluptatem, nostrum deleniti aliquam nemo
      molestias expedita accusamus consequatur iure deserunt similique est quod
      assumenda!
    </>
  ),
  icon: <Error />,
  hasCloser: true,
};
