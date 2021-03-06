import React, { FC } from "react";
import "./Container.scss";
export declare type ContainerPropsType = {
    fullwidth?: boolean;
    adaptive?: boolean;
    fixed?: boolean;
    style?: React.CSSProperties;
};
declare const Container: FC<ContainerPropsType>;
export default Container;
