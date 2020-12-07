import React, { useState } from 'react';
import styled from 'styled-components';

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
      <Input label="姓名" value={value} onChange={handleInputChange} />
    </Wrapper>
  );
};

export default Home;
