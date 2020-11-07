import styled from 'styled-components';

import { shadow } from '../../../lib/styles/shadow';

const Danger = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;

  background: #ff4d4f;

  &:hover {
    box-shadow: ${shadow[3]};
  }

  &:active {
    box-shadow: none;
  }
`;

export default Danger;
