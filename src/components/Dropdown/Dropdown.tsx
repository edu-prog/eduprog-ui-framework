import React, { FC, useRef, useState } from "react";
import "./Dropdown.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";
import { useClickAway } from "@utils/hooks/useClickAway";

export type DropdownPropsType = defaultProps & {
  /**
   * Дочерние элементы Dropdown
   */
  children: React.ReactNode;

  open?: boolean;

  /**
   * Направление раскрытия popup
   */
  direction:
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "top-left"
    | "top-center"
    | "top-right";

  /**
   * Убрать стрелочку направления popup
   */
  clearly?: boolean;

  /**
   * Dropdown в полный размер родительского блока
   */
  fullwidth?: boolean;

  /**
   * Когда dropdown закрывается
   */
  dismissible?: "always" | "toggle" | "outside";

  onClose?: () => void;
};

/**
 * Компонент для создания выпадающего списка
 */
const Dropdown: FC<DropdownPropsType> = ({
  children,
  direction = "bottom-left",
  clearly = false,
  fullwidth = false,
  dismissible = "always",
  style,
  open = false,
  onClose,
}) => {
  const dropdownItem = useRef<HTMLDivElement>(null);
  useClickAway(dropdownItem, () => {
    if (onClose) {
      onClose();
    }
  });

  return (
    <div
      className={classNames("dropdown", { "dropdown-fullwidth": fullwidth })}
      onBlur={() => (onClose ? dismissible == "always" && onClose() : null)}
      style={style}
    >
      <div
        className={classNames("dropdown-transition", {
          "dropdown-transition-active": open,
        })}
      >
        <div
          ref={dropdownItem}
          className={classNames(
            "dropdown-item",
            { [`dropdown-item-direction_${direction}`]: true },
            { "dropdown-item-clearly": clearly },
            { "dropdown-fullwidth": fullwidth }
          )}
        >
          <div className="dropdown-item-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
