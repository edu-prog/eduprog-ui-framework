import React, { FC, useState } from "react";
import "./Button.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";

export type ButtonPropsType = defaultProps & {
  /**
   * Тип кнопки
   */
  view?: "default" | "action" | "link" | "pseudo" | "clear" | "raised";

  /**
   * Размер кнопки
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Обработчик клика по кнопке
   */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   *  Имя кнопки в DOM
   */
  name?: string;

  /**
   * Управление шириной кнопки. При значении 'available' растягивает кнопку на ширину родителя
   */
  width?: "default" | "available";

  /**
   * Список произвольных элементов в левом слоте.
   */
  contentLeft?: React.ReactNode;

  /**
   * Список произвольных элементов в правом слоте.
   */
  contentRight?: React.ReactNode;

  /*
   * Тип поведения кнопки в форме
   */
  type?: "button" | "reset" | "submit";

  /**
   * Выравнивание лейбла кнопки
   */
  labelJustifyContent?: "center" | "space-around";

  labelAlignItems?: "center";
};

/**
 * Компонент создающий кнопки
 */
const Button: FC<ButtonPropsType> = ({
  children,
  view = "default",
  size = "md",
  onClick,
  className = "",
  name,
  width = "default",
  contentLeft,
  contentRight,
  type = "button",
  labelJustifyContent = "center",
  labelAlignItems = "center",
}) => {
  const [active, setActive] = useState(false);

  const rootClasses = classNames(
    "Button",
    { [`Button-view_${view}`]: true },
    { [`Button-size_${size}`]: true },
    { "Button-clicking": active },
    { [`Button-width_${width}`]: true }
  );

  const clicking = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(true);

    if (onClick) {
      onClick(event);
    }

    setTimeout(() => {
      setActive(false);
    }, 400);
  };

  return (
    <button
      className={`${rootClasses} ${className}`}
      onClick={(event) => clicking(event)}
      name={name}
      type={type}
    >
      <span
        className={classNames("Button-label")}
        style={{
          justifyContent: labelJustifyContent,
        }}
      >
        <span className="Button-label_left">{contentLeft}</span>
        <span
          className="Button-label_center"
          style={{ display: "flex", alignItems: labelAlignItems }}
        >
          {children}
        </span>

        <span className="Button-label_right">{contentRight}</span>
      </span>
    </button>
  );
};

export default Button;
