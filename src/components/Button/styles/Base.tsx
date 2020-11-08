import styled from 'styled-components';

import shadow from '../../../lib/styles/shadow';

import normal from './normal';
import danger from './danger';
import color from '../../../lib/styles/color';

interface StyleProps {
  isContained: boolean;
}

const Base = styled.button<StyleProps>`
  position: relative;
  margin: 50px;
  padding: 4px 12px;
  border: 2px solid transparent;
  outline: none;

  background: transparent;

  font-size: 14px;
  text-align: center;
  line-height: 1.572;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);

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
`;

export default Base;
