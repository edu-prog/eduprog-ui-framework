import React, { FC, useEffect, useState } from "react";
import BaseInput from "@components/Inputs/BaseInput/BaseInput";
import Dropdown from "@components/Dropdown/Dropdown";
import { sha256 } from "js-sha256";
import "./SelectLargeDevice.scss";
import {
  SelectTypeProps,
  SelectValue,
} from "@components/Select/Select/SelectProps";

const SelectLargeDevice: FC<SelectTypeProps<any>> = ({
  label,
  options,
  defaultValue,
  onChange,
  zIndex,
}) => {
  const [value, setValue] = useState(defaultValue);

  const SelectToggle = (
    <BaseInput
      label={label}
      defaultValue={value ? value.name : ""}
      cursor="pointer"
      readonly
      rightAdditional={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
          <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
        </svg>
      }
    />
  );

  const onSelect = (option: SelectValue<any>) => {
    setValue(option);
  };

  useEffect(() => {
    if (onChange && value != undefined) {
      onChange(value);
    }
  }, [value]);

  const SelectPopup = (
    <div className="select">
      {options.map((option) => (
        <div
          className="select-item"
          key={sha256(option.name)}
          onClick={() => onSelect(option)}
        >
          {option.name}
        </div>
      ))}
    </div>
  );

  return (
    <Dropdown
      direction="bottom-center"
      toggle={SelectToggle}
      clearly
      dismissible="always"
      fullwidth
      style={{zIndex: zIndex}}
    >
      {SelectPopup}
    </Dropdown>
  );
};

export default SelectLargeDevice;
