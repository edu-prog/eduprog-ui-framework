import React, { FC, useRef } from "react";
import "./Dialog.scss";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";
import useClickAway from "@utils/hooks/useClickAway";
import Backdrop from "@components/Backdrop/Backdrop";
import usePreventScroll from "@utils/hooks/usePreventScroll";

export type DialogPropsType = {
  /**
   * Headline
   */
  label?: string;

  /**
   * Size
   */
  size: "xs" | "sm" | "md" | "lg" | "xl" | "fluid" | "page";

  /**
   * Makes the dialog visible
   */
  open?: boolean;

  /**
   * Event triggered by closing the dialog
   */
  onClose?: () => void;

  /**
   * Vertical alignment
   */
  verticalAlign?: "top" | "center";

  /**
   * Styles of dialog
   */
  style?: React.CSSProperties;
};

const Dialog: FC<DialogPropsType> = ({
  label,
  children,
  size = "md",
  open = false,
  onClose,
  verticalAlign = "center",
  style,
}) => {
  usePreventScroll(open, "dialog-body");

  return (
    <CSSTransition
      unmountOnExit
      in={open}
      timeout={150}
      classNames={"dialog-animation"}
    >
      <div
        style={style}
        className={clsx("dialog", {
          [`dialog-align_${verticalAlign}`]: verticalAlign,
        })}
      >
        <Backdrop open={open} onClick={onClose} />

        <CSSTransition
          in={open}
          unmountOnExit
          timeout={150}
          classNames={"dialog-body-animation"}
        >
          <div
            className={clsx("dialog-body", {
              [`dialog-body-size_${size}`]: size,
              [`dialog-body-align_${verticalAlign}`]: verticalAlign,
            })}
          >
            <section className="dialog-header">
              <h2 className="dialog-heading">{label}</h2>
            </section>
            <section className="dialog-content">{children}</section>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Dialog;
