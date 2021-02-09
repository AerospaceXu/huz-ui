import React, { useState, useEffect, useCallback } from "react";
import "./style/index.scss";

import useInput from "./hooks/useInput";

interface Props {
  label: string;
  value: string;
  inputWidth?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  const {
    label, value, inputWidth, onChange, onFocus, onBlur,
  } = props;

  const { input, inputSize } = useInput();

  const [borderClass, setBorderClass] = useState<string>("");
  const [fieldsetClass, setFieldsetClass] = useState<string>("");
  const [legendClass, setLegendClass] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const hasInput = value.length > 0;

  const getInputState = useCallback(() => {
    setBorderClass(
      isFocused
        ? "transparent-border"
        : isHover
          ? hasInput
            ? "transparent-border"
            : "hovered-border"
          : hasInput
            ? "transparent-border"
            : "",
    );

    setFieldsetClass(
      isFocused
        ? "focused-fieldset"
        : isHover
          ? hasInput
            ? "hovered-fieldset"
            : "transparent-border"
          : hasInput
            ? ""
            : "transparent-border",
    );
    setLegendClass(
      isFocused ? "legend-up legend-color" : hasInput ? "legend-up" : "",
    );
  }, [hasInput, isFocused, isHover]);

  useEffect(() => {
    getInputState();
  }, [getInputState]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="huz-input" style={{ width: `${inputWidth}px` }}>
      <fieldset className={fieldsetClass}>
        <label htmlFor={label}>
          <input
            ref={input}
            id={label}
            name={label}
            type="text"
            value={value}
            onChange={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
        </label>
        <legend
          className={legendClass}
          style={{
            height: `${inputSize.height}px`,
            lineHeight: `${inputSize.height}px`,
          }}
        >
          {label}
        </legend>
      </fieldset>
      <div
        className={`input-border ${borderClass}`}
        style={{
          top: `${inputSize.height / 2}px`,
          height: `calc(100% - ${inputSize.height / 2}px)`,
        }}
      />
    </div>
  );
};
export default Input;
