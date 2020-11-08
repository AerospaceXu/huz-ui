import styled from 'styled-components';

import shadow from '../../../lib/styles/shadow';

import normal from './normal';
import danger from './danger';

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
  line-height: 1.5;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);

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
`;

export default Base;
