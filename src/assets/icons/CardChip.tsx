import React, { FC } from "react";
import { IconProps } from "@icons/IconProps";

const CardChip: FC<IconProps> = ({ width = 48, height = 48 }) => {
  return (
    <div
      className="ui-icon"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 35V13C5 10.8 6.8 9 9 9H39C41.2 9 43 10.8 43 13V35C43 37.2 41.2 39 39 39H9C6.8 39 5 37.2 5 35Z"
          fill="#FF9800"
        />
        <path
          d="M43 21V19H31C29.9 19 29 18.1 29 17C29 15.9 29.9 15 31 15H32V13H31C28.8 13 27 14.8 27 17C27 19.2 28.8 21 31 21H34V27H31C28.2 27 26 29.2 26 32C26 34.8 28.2 37 31 37H33V35H31C29.3 35 28 33.7 28 32C28 30.3 29.3 29 31 29H43V27H36V21H43Z"
          fill="#FFD54F"
        />
        <path
          d="M17 27H14V21H17C19.2 21 21 19.2 21 17C21 14.8 19.2 13 17 13H14V15H17C18.1 15 19 15.9 19 17C19 18.1 18.1 19 17 19H5V21H12V27H5V29H17C18.7 29 20 30.3 20 32C20 33.7 18.7 35 17 35H15V37H17C19.8 37 22 34.8 22 32C22 29.2 19.8 27 17 27Z"
          fill="#FFD54F"
        />
      </svg>
    </div>
  );
};

export default CardChip;
