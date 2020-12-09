import styled from 'styled-components';

import color from '../../../lib/styles/color';

import normal from './normal';
import danger from './danger';
import disable from './disable';

interface StyleProps {
  isContained: boolean;
}

const Base = styled.button<StyleProps>`
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
