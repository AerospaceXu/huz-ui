import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Input from '../components/Input';

const Wrapper = styled.div`
  width: 100%;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <Wrapper>
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
      <br />
      <Input label="姓名" value={value} onChange={handleInputChange} />
    </Wrapper>
  );
};

export default Home;
