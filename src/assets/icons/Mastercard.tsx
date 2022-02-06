import React, { FC } from "react";
import { IconProps } from "@icons/IconProps";

const Mastercard: FC<IconProps> = ({ width = 24, height = 24 }) => {
  return (
    <div
      className="ui-icon"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 19C10.866 19 14 15.866 14 12C14 8.13401 10.866 5 7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19Z"
          fill="#EA001B"
        />
        <path
          d="M17 19C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5C13.134 5 10 8.13401 10 12C10 15.866 13.134 19 17 19Z"
          fill="#FFA200"
          fillOpacity="0.8"
        />
      </svg>
    </div>
  );
};

export default Mastercard;