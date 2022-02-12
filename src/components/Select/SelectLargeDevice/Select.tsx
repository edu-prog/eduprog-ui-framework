import { MultipleSelectValue } from "@components/Select/MultipleSelect/MultipleSelectProps";
import React, { FC, useState } from "react";
import BaseInput from "@components/Inputs/BaseInput/BaseInput";
import Dropdown from "@components/Dropdown/Dropdown";
import { sha256 } from "js-sha256";
import "./Select.scss";

export type SelectValue<Type> = MultipleSelectValue<Type>;

export type ISelectProps<Type> = {
  label: string;
  options: Array<SelectValue<Type>>;
  defaultValue: SelectValue<Type>;
  onChange: (option: SelectValue<Type>) => void;
};

const SelectLargeDevice: FC<ISelectProps<any>> = ({
  label,
  options,
  defaultValue,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const SelectToggle = () => (
    <BaseInput
      label={label}
      defaultValue={value ? value.name : ""}
      cursor="pointer"
      onClick={() => setOpen(!open)}
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

    if (onChange) {
      onChange(value);
    }
  };

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
    <>
      <SelectToggle />
      <Dropdown
        direction="bottom-center"
        clearly
        dismissible="outside"
        fullwidth
        open={open}
        onClose={() => setOpen(!open)}
      >
        {SelectPopup}
      </Dropdown>
    </>
  );
};

export default SelectLargeDevice;
