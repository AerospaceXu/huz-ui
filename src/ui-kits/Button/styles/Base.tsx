import styled from 'styled-components';

import shadow from '../../../lib/styles/shadow';
import color from '../../../lib/styles/color';

import normal from './normal';
import danger from './danger';
import disable from './disable';

interface StyleProps {
  isContained: boolean;
}

const Base = styled.button<StyleProps>`
  position: relative;
  padding: 4px 12px;
  border: 2px solid transparent;
  outline: none;

  background: transparent;

  text-align: center;
  font-weight: 500;
  color: #ffffff;

  cursor: pointer;
  user-select: none;

  transition: 195ms linear;

  &:hover {
    box-shadow: ${shadow[3]};
  }

  &:active {
    box-shadow: none;
  }

  &.normal-button {
    ${(p) => normal(p.isContained)}
    &:hover {
      ${(p) => normal(p.isContained, true)}
    }
  }

  &.danger-button {
    ${(p) => danger(p.isContained)}
    &:hover {
      ${(p) => danger(p.isContained, true)}
    }
  }

  &.link-button {
    color: rgba(0, 0, 0, 0.87);

    &:hover {
      color: ${color.light.blue};
      box-shadow: none;
    }
  }

  &.disable-button {
    ${(p) => disable(p.isContained)}
    &:hover {
      box-shadow: none;
      ${(p) => disable(p.isContained, true)}
    }
  }
`;

export default Base;
