import React from 'react';
import styled from 'styled-components';

import ComponentShowBlock from '../components/ComponentShowBlock';
import Message from '../ui-kits/Message';

const Wrapper = styled.div`
  width: 100%;
`;

const ComponentInputPage: React.FC = () => (
  <Wrapper>
    <ComponentShowBlock title="Input 样式">
      <Message messageType="success" text="这是一条成功提醒" />
      <Message messageType="error" text="这是一条失败提醒" />
    </ComponentShowBlock>
  </Wrapper>
);

export default ComponentInputPage;
