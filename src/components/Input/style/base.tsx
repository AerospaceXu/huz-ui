import styled from 'styled-components';

import color from '../../../lib/styles/color';
import fontBase from '../../../lib/styles/font-base';

interface StyleProps {
  inputWidth: number;
  inputSize: {
    width: number;
    height: number;
  };
}

const InputWrapper = styled.div<StyleProps>`
  box-sizing: border-box;

  div,
  span {
    box-sizing: border-box;
  }

  margin: 40px;
  width: ${(p) => p.inputWidth}px;
  height: auto;

  position: relative;
  display: flex;

  font-size: ${fontBase['font-size']};
  line-height: 1.572;
  font-weight: 400;
  color: ${fontBase.color};
  font-family: ${fontBase['font-family']};

  > .input-border {
    position: absolute;
    left: 0;
    top: ${(p) => p.inputSize.height / 2}px;
    width: 100%;
    height: calc(100% - ${(p) => p.inputSize.height / 2}px);
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0.32);

    pointer-events: none;

    &.transparent-border {
      border-color: transparent;
    }

    &.hovered-border {
      border-color: rgba(0, 0, 0, 0.54);
    }
  }

  > fieldset {
    width: 100%;
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0.32);
    padding: 0 10px 10px;

    position: relative;

    display: flex;

    transition: 125ms linear;

    &.focused-fieldset {
      border-color: ${color.light.blue};
    }

    &.hovered-fieldset {
      border-color: rgba(0, 0, 0, 0.54);
    }

    &.transparent-border {
      border-color: transparent;
    }

    > legend {
      width: auto;
      height: ${(p) => p.inputSize.height}px;
      padding: 0 4px;

      transform: translateY(100%);

      font-size: 14px;
      line-height: ${(p) => p.inputSize.height}px;
      color: rgba(0, 0, 0, 0.54);
      text-align: left;

      transition: 125ms linear;

      pointer-events: none;

      &.legend-up {
        font-size: 12px;
        transform: translateY(0);
      }

      &.legend-color {
        color: ${color.light.blue};
      }
    }

    > label {
      width: 100%;
      height: auto;
      display: flex;

      > input {
        width: 100%;
        padding: 4px 4px;
        border: none;
        outline: none;

        font-size: 14px;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
`;

export default InputWrapper;
