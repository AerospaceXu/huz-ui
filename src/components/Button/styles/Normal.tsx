import styled from 'styled-components';

import shadow from '../../../lib/styles/shadow';

const Normal = styled.span`
  display: block;
  width: 100%;
  height: 100%;

  background: #90caf9;
  border-radius: 4px;

  color: rgba(0, 0, 0, 1);

  &:hover {
    box-shadow: ${shadow[3]};
  }

  &:active {
    box-shadow: none;
  }
`;

export default Normal;
