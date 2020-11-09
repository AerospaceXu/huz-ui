import styled from 'styled-components';

import color from '../../../lib/styles/color';

interface StyleProps {
  inputSize: {
    width: number;
    height: number;
  };
}

const InputWrapper = styled.div<StyleProps>`
  margin: 40px;
  width: 200px;
  height: auto;

  position: relative;
  display: flex;

  > .input-border {
    position: absolute;
    left: 0;
    top: ${(p) => p.inputSize.height / 2}px;
    width: ${(p) => p.inputSize.width + 18}px;
    height: calc(100% - ${(p) => p.inputSize.height / 2}px);
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0.32);

    pointer-events: none;
    transition: 125ms linear;

    &.transparent-border {
      border-color: transparent;
    }

    &.hovered-border {
      border-color: rgba(0, 0, 0, 0.54);
    }
  }

  > fieldset {
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0.32);
    padding: 10px;
    padding-top: 0;

    position: relative;

    display: flex;

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
      display: block;
      width: auto;
      height: auto;
      display: flex;

      > input {
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
