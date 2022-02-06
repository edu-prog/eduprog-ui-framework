import React, { FC } from "react";
import { IconProps } from "@icons/IconProps";

const CardChip: FC<IconProps> = ({ width = 48, height = 48 }) => {
  return (
    <div
      className="ui-icon"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 17.5V6.5C2.5 5.4 3.4 4.5 4.5 4.5H19.5C20.6 4.5 21.5 5.4 21.5 6.5V17.5C21.5 18.6 20.6 19.5 19.5 19.5H4.5C3.4 19.5 2.5 18.6 2.5 17.5Z"
          fill="#FF9800"
        />
        <path
          d="M21.5 10.5V9.5H15.5C14.95 9.5 14.5 9.05 14.5 8.5C14.5 7.95 14.95 7.5 15.5 7.5H16V6.5H15.5C14.4 6.5 13.5 7.4 13.5 8.5C13.5 9.6 14.4 10.5 15.5 10.5H17V13.5H15.5C14.1 13.5 13 14.6 13 16C13 17.4 14.1 18.5 15.5 18.5H16.5V17.5H15.5C14.65 17.5 14 16.85 14 16C14 15.15 14.65 14.5 15.5 14.5H21.5V13.5H18V10.5H21.5Z"
          fill="#FFD54F"
        />
        <path
          d="M8.5 13.5H7V10.5H8.5C9.6 10.5 10.5 9.6 10.5 8.5C10.5 7.4 9.6 6.5 8.5 6.5H7V7.5H8.5C9.05 7.5 9.5 7.95 9.5 8.5C9.5 9.05 9.05 9.5 8.5 9.5H2.5V10.5H6V13.5H2.5V14.5H8.5C9.35 14.5 10 15.15 10 16C10 16.85 9.35 17.5 8.5 17.5H7.5V18.5H8.5C9.9 18.5 11 17.4 11 16C11 14.6 9.9 13.5 8.5 13.5Z"
          fill="#FFD54F"
        />
      </svg>
    </div>
  );
};

export default CardChip;