import React, { useState } from 'react';
import styled from 'styled-components';

import ComponentShowBlock from '../components/ComponentShowBlock';
import Input from '../ui-kits/Input';

const Wrapper = styled.div`
  width: 100%;
`;

const ComponentInputPage: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Wrapper>
      <ComponentShowBlock title="Input 样式">
        <Input label="姓名" value={value} onChange={handleInputChange} />
      </ComponentShowBlock>
    </Wrapper>
  );
};

export default ComponentInputPage;
