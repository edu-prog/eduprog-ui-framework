import { IconProps } from "@icons/IconProps";
import React, { FC } from "react";

const MasterCard: FC<IconProps> = ({ width = "2rem", height = 24 }) => {
  return (
    <div className="ui-icon" style={{ width: width, height: height }}>
      <svg
        width="32"
        height="22"
        viewBox="0 0 32 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.2982 5.23456H12.6843V16.7655H19.2982V5.23456Z"
          fill="#FF5F00"
        />
        <path
          d="M13.1043 11C13.1032 9.8895 13.3626 8.79331 13.8628 7.79443C14.363 6.79556 15.0908 5.92018 15.9912 5.23455C14.8762 4.38422 13.537 3.85541 12.1268 3.70857C10.7166 3.56173 9.2923 3.80277 8.01664 4.40415C6.74097 5.00553 5.66544 5.943 4.91297 7.10938C4.16051 8.27576 3.76147 9.624 3.76147 11C3.76147 12.376 4.16051 13.7243 4.91297 14.8906C5.66544 16.057 6.74097 16.9945 8.01664 17.5959C9.2923 18.1973 10.7166 18.4383 12.1268 18.2914C13.537 18.1446 14.8762 17.6158 15.9912 16.7655C15.0908 16.0798 14.363 15.2045 13.8628 14.2056C13.3626 13.2067 13.1032 12.1105 13.1043 11V11Z"
          fill="#EB001B"
        />
        <path
          d="M28.2207 11C28.2207 12.376 27.8217 13.7242 27.0693 14.8906C26.3169 16.057 25.2414 16.9945 23.9657 17.5958C22.6901 18.1972 21.2658 18.4383 19.8556 18.2914C18.4454 18.1446 17.1063 17.6158 15.9913 16.7655C16.8909 16.0791 17.6182 15.2036 18.1183 14.2049C18.6184 13.2062 18.8782 12.1103 18.8782 11C18.8782 9.88967 18.6184 8.79383 18.1183 7.79511C17.6182 6.79639 16.8909 5.92087 15.9913 5.23455C17.1063 4.38422 18.4454 3.85541 19.8556 3.70857C21.2658 3.56173 22.6901 3.80278 23.9657 4.40417C25.2414 5.00556 26.3169 5.94302 27.0693 7.1094C27.8217 8.27579 28.2207 9.62402 28.2207 11V11Z"
          fill="#F79E1B"
        />
        <path
          d="M27.4995 15.5442V15.3081H27.5976V15.26H27.3477V15.3081H27.4459V15.5442H27.4995ZM27.9846 15.5442V15.2595H27.908L27.8199 15.4553L27.7318 15.2595H27.6551V15.5442H27.7092V15.3295L27.7919 15.5146H27.8479L27.9306 15.329V15.5442H27.9846Z"
          fill="#F79E1B"
        />
      </svg>
    </div>
  );
};

export default MasterCard;