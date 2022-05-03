import { SelectTypeProps } from "@components/Select/Select/SelectProps";
import React, { FC, useState } from "react";
import "./SelectSmallDevice.scss";
import "@components/Inputs/BaseInput/BaseInput.scss";
import classNames from "classnames";
import { sha256 } from "js-sha256";

const SelectSmallDevice: FC<SelectTypeProps<any>> = ({
  label,
  name,
  options,
  onChange,
}) => {
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectId = sha256(new Date().getTime().toString());

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value.toString();

    setSelectedOption(
      options.find((currentOption) => currentOption.name == option)!
    );

    onChange(selectedOption);
  };

  return (
    <div className="input">
      <div
        className={classNames("input-label", {
          "input-label-active": active || selectedOption,
        })}
      >
        {label}
      </div>

      <div className="input-field">
        <select
          className="input-control"
          onFocus={() => setActive(!active)}
          onBlur={() => setActive(!active)}
          onChange={selectChange}
          style={{ color: "transparent" }}
          name={name}
          size={1}
          id={selectId}
        >
          {options.map(({ name }) => (
            <option value={name} key={sha256(name)}>
              {name}
            </option>
          ))}
        </select>

        <div className="select-value">{selectedOption.name}</div>

        <div className="select-icon">
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
        </div>
      </div>
    </div>
  );
};

export default SelectSmallDevice;
