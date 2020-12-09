import React from 'react';
import styled from 'styled-components';

import Button from '../ui-kits/Button';
import ComponentShowBlock from '../components/ComponentShowBlock';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ComponentButtonPage: React.FC = () => (
  <Wrapper>
    <ComponentShowBlock title="按钮类型">
      <Button>普通按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="danger">警告按钮</Button>
      <Button type="link">链接按钮</Button>
    </ComponentShowBlock>
    <ComponentShowBlock title="实心与空心">
      <Button isContained={false}>普通按钮</Button>
      <Button isContained={false} type="primary">
        主要按钮
      </Button>
      <Button type="danger" isContained={false}>
        警告按钮
      </Button>
    </ComponentShowBlock>
    <ComponentShowBlock title="禁止按钮">
      <Button type="danger" disable>
        禁止按钮
      </Button>
    </ComponentShowBlock>
  </Wrapper>
);

export default ComponentButtonPage;
