import React, { FC } from "react";
import "./Container.scss";
import clsx from "clsx";

export type ContainerPropsType = {
  fullwidth?: boolean;
  adaptive?: boolean;
  fixed?: boolean;
  style?: React.CSSProperties;
};

const Container: FC<ContainerPropsType> = ({
  children,
  fullwidth,
  adaptive = true,
  fixed,
  style,
}) => {
  const rootClasses = clsx(
    "ep-container",
    { "ep-container_fullwidth": fullwidth },
    { "ep-container_adaptive": adaptive },
    { "ep-container_fixed": fixed }
  );

  return (
    <div style={style} className={rootClasses}>
      {children}
    </div>
  );
};

export default Container;
