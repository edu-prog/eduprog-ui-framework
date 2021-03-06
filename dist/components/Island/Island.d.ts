import React, { FC } from "react";
import "./Island.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type IslandPropsType = defaultProps & {
    /**
     * Size
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * Align
     */
    align?: "left" | "center" | "right";
    /**
     * Component theme
     *
     * `shadow` - shading on borders
     *
     * `border` - light grey outline
     */
    type?: "shadow" | "border";
    /**
     * The transition that will be made when hovering over Island.
     *
     * `scale` — Island will be smoothly enlarged
     * `translateY` — Island will be lifted up
     */
    hoverTransition?: null | "scale" | "translateY";
    /**
     * onClick callback handler
     */
    onClick?: (event: React.MouseEvent) => void;
};
/**
 * Island displays information in a rounded block with a border
 */
declare const Island: FC<IslandPropsType>;
export default Island;
