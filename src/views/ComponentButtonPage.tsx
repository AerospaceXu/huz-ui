import React from 'react';
import styled from 'styled-components';

import Button from '../ui-kits/Button';
import Main from '../Layouts/Main';

const Wrapper = styled.div`
  width: 100%;

  > button {
    margin: 8px;
  }
`;

const ComponentButtonPage: React.FC = () => (
  <Wrapper>
    <Main>
      <Button>普通按钮</Button>
      <Button isContained={false}>普通按钮</Button>
      <Button type="danger">警告按钮</Button>
      <Button type="danger" isContained={false}>
        警告按钮
      </Button>
      <Button type="link">链接按钮</Button>
      <Button type="danger" disable>
        链接按钮
      </Button>
    </Main>
  </Wrapper>
);

export default ComponentButtonPage;
