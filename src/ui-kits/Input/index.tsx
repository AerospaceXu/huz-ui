import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';

import InputWrapper from './style/base';

import useInput from './hooks/useInput';

interface Props {
  label: string;
  value: string;
  inputWidth?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  const {
    label, value, inputWidth, onChange,
  } = props;

  const { input, inputSize } = useInput();

  const [borderClass, setBorderClass] = useState<string>('');
  const [fieldsetClass, setFieldsetClass] = useState<string>('');
  const [legendClass, setLegendClass] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const hasInput = value.length > 0;

  const getInputState = useCallback(() => {
    setBorderClass(
      isFocused
        ? 'transparent-border'
        : isHover
          ? hasInput
            ? 'transparent-border'
            : 'hovered-border'
          : hasInput
            ? 'transparent-border'
            : '',
    );

    setFieldsetClass(
      isFocused
        ? 'focused-fieldset'
        : isHover
          ? hasInput
            ? 'hovered-fieldset'
            : 'transparent-border'
          : hasInput
            ? ''
            : 'transparent-border',
    );
    setLegendClass(
      isFocused ? 'legend-up legend-color' : hasInput ? 'legend-up' : '',
    );
  }, [hasInput, isFocused, isHover]);

  useEffect(() => {
    getInputState();
  }, [getInputState]);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <InputWrapper inputWidth={inputWidth || 200} inputSize={inputSize}>
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
        <legend className={legendClass}>{label}</legend>
      </fieldset>
      <div className={`input-border ${borderClass}`} />
    </InputWrapper>
  );
};

export default Input;
